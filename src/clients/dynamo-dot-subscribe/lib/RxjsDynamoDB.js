"use strict";
/*
  GPL 3.0 License

  RxjsDynamoDB - An Observable DynamoDB Client

  Copyright (C) 2020 Joshua Hull

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
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