"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_dynamo_client_v3_1 = require("observable-dynamo-client-v3");
const operators_1 = require("rxjs/operators");
let client;
beforeAll(done => {
    client = new observable_dynamo_client_v3_1.ObservableDynamoDB({
        region: 'ap-southeast-2',
    });
    client.listTables({}).pipe(operators_1.take(1), operators_1.map(tables => {
        'tables: ' + console.log(tables);
        done();
    })).subscribe();
});
describe('PutItemCommand tests', () => {
    test('Should successfully put item', () => { });
});
describe('GetItemCommand tests', () => {
    test('Should successfully get item', () => { });
});
//# sourceMappingURL=ObservableDynamoDB.test.js.map