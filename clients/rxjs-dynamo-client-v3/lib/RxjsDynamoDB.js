"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RxjsDynamoDB = void 0;
const observable_dynamo_client_v3_1 = require("observable-dynamo-client-v3");
const rxjs_1 = require("rxjs");
class RxjsDynamoDB {
    constructor(config) {
        this._client = new observable_dynamo_client_v3_1.ObservableDynamoDBClient(config);
    }
    sendQuery(query) {
        return new rxjs_1.BehaviorSubject(null);
    }
    sendCommand(command) {
        return new rxjs_1.BehaviorSubject(null);
    }
}
exports.RxjsDynamoDB = RxjsDynamoDB;
//# sourceMappingURL=RxjsDynamoDB.js.map