"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const rxjs_1 = require("rxjs");
const smithy_client_1 = require("@aws-sdk/smithy-client");
class Client {
    constructor(config) {
        this._client = new smithy_client_1.Client(config);
    }
    send(command, options) {
        return rxjs_1.from(this._client.send(command, options));
    }
    destroy() {
        this._client.destroy();
    }
    ;
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map