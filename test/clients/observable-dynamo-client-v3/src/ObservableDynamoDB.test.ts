import { ObservableDynamoDB } from 'observable-dynamo-client-v3';
import { EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

const TEST_TABLE_NAME = 'ObservableDynamoDBTests';

let client: ObservableDynamoDB;

beforeAll(done => {
  client = new ObservableDynamoDB({
    region: 'ap-southeast-2',
    endpoint: 'http://localhost:8000'
  });

  client.listTables({}).pipe(
    map(output => output.TableNames),
    mergeMap(tableNames => {
      if (tableNames?.includes(TEST_TABLE_NAME)) {
        done();
        return EMPTY;
      }

      return client.createTable({
        TableName: TEST_TABLE_NAME,
        AttributeDefinitions: [{
          AttributeName: 'id',
          AttributeType: 'S',
        }],
        KeySchema: [{
          AttributeName: 'id',
          KeyType: 'HASH',
        }],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      });
    }),
  ).subscribe(_ => done());
});

afterAll(done => {
  client.listTables({}).pipe(
    map(output => output.TableNames),
    mergeMap(tableNames => {
      if (tableNames?.includes(TEST_TABLE_NAME)) {
        done();
        return EMPTY;
      }

      return client.deleteTable({
        TableName: TEST_TABLE_NAME,
      });
    }),
  ).subscribe(_ => done());
})

describe('PutItemCommand tests', () => {
  test('Should successfully put item', done => {
    client.putItem({
      TableName: TEST_TABLE_NAME,
      Item: {
        id: {
          S: 'PutItemCommand',
        },
        value: {
          S: 'hello',
        },
      },
    }).subscribe(output => {
      expect(output).not.toBeNull();
      expect(output.$metadata).not.toBeNull();
      expect(output.$metadata.httpStatusCode).toBe(200);
      done();
    });
  });
});

describe('GetItemCommand tests', () => {
  let ids: { [key: string]: string } = {};
  let values: { [key: string]: string } = {};

  beforeEach(done => {
    ids['1'] = Math.random().toString(36).substr(0, 10);
    values['1'] = 'hello';

    client.putItem({
      TableName: TEST_TABLE_NAME,
      Item: {
        id: {
          S: ids['1'],
        },
        value: {
          S: values['1']
        },
      },
    }).subscribe(_ => done());
  });

  test('Should successfully get item', done => {
    client.getItem({
      TableName: TEST_TABLE_NAME,
      Key: {
        id: {
          S: ids['1'],
        },
      },
    }).subscribe(output => {
      expect(output).not.toBeNull();
      expect(output.Item).not.toBeNull();
      expect(output.Item?.value).not.toBeNull();
      expect(output.Item?.value.S).toBe(values['1']);
      done();
    });
  });
});
