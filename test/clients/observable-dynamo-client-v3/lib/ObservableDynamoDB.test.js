"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_dynamo_client_v3_1 = require("observable-dynamo-client-v3");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const TEST_TABLE_NAME = 'ObservableDynamoDBTests';
let client;
beforeAll(done => {
    client = new observable_dynamo_client_v3_1.ObservableDynamoDB({
        region: 'ap-southeast-2',
        endpoint: 'http://localhost:8000'
    });
    client.listTables({}).pipe(operators_1.map(output => output.TableNames), operators_1.mergeMap(tableNames => {
        if (tableNames === null || tableNames === void 0 ? void 0 : tableNames.includes(TEST_TABLE_NAME)) {
            done();
            return rxjs_1.EMPTY;
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
    })).subscribe(_ => done());
});
afterAll(done => {
    client.listTables({}).pipe(operators_1.map(output => output.TableNames), operators_1.mergeMap(tableNames => {
        if (tableNames === null || tableNames === void 0 ? void 0 : tableNames.includes(TEST_TABLE_NAME)) {
            done();
            return rxjs_1.EMPTY;
        }
        return client.deleteTable({
            TableName: TEST_TABLE_NAME,
        });
    })).subscribe(_ => done());
});
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
    let ids = {};
    let values = {};
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
            var _a, _b;
            expect(output).not.toBeNull();
            expect(output.Item).not.toBeNull();
            expect((_a = output.Item) === null || _a === void 0 ? void 0 : _a.value).not.toBeNull();
            expect((_b = output.Item) === null || _b === void 0 ? void 0 : _b.value.S).toBe(values['1']);
            done();
        });
    });
});
//# sourceMappingURL=ObservableDynamoDB.test.js.map