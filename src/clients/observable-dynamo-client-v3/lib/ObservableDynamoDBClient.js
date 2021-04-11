"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableDynamoDBClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const Client_1 = require("./Client");
class ObservableDynamoDBClient extends Client_1.Client {
    constructor(config) {
        const resolved = new client_dynamodb_1.DynamoDBClient(config).config;
        super(resolved);
    }
}
exports.ObservableDynamoDBClient = ObservableDynamoDBClient;
//# sourceMappingURL=ObservableDynamoDBClient.js.map