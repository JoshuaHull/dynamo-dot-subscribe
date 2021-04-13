import { ObservableDynamoDB } from 'observable-dynamo-client-v3';
import { take, map } from 'rxjs/operators';

let client: ObservableDynamoDB;

beforeAll(done => {
  client = new ObservableDynamoDB({
    region: 'ap-southeast-2',
  });
  client.listTables({}).pipe(
    take(1),
    map(tables => {
      'tables: ' + console.log(tables);
      done();
    })
  ).subscribe();
});

describe('PutItemCommand tests', () => {
  test('Should successfully put item', () => {});
});

describe('GetItemCommand tests', () => {
  test('Should successfully get item', () => {});
});
