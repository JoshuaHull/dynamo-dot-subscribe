import { ObservableDynamoDB } from 'observable-dynamo-client-v3';
import { pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';

let client: ObservableDynamoDB;

beforeAll(() => {
  client = new ObservableDynamoDB({
    endpoint: 'https://localhost:8000',
  });
  client.listTables({}).pipe(
    take(1),
    map(tables => 'tables: ' + console.log(tables))
  ).subscribe();
});

describe('PutItemCommand tests', () => {
  test('Should successfully put item', () => {});
});

describe('GetItemCommand tests', () => {
  test('Should successfully get item', () => {});
});
