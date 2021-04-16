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
const observable_dynamo_1 = require("@dynamo-dot-subscribe/observable-dynamo");
const operators_1 = require("rxjs/operators");
const State_1 = require("./State");
class RxjsDynamoDB {
    constructor(config) {
        this._client = new observable_dynamo_1.ObservableDynamoDB(config);
        const toKey = (item) => item
            ? `${config.tableName}:${item[config.hashKey]}:${config.rangeKey ? item[config.rangeKey] : ''}`
            : '';
        this._state = new State_1.State(toKey);
    }
    getItem(args, options) {
        if (!args.Key)
            throw 'GetItem requires a key';
        return this._state.getSubject(args.Key) ||
            this._client.getItem(args, options).pipe(operators_1.filter(output => !!output.Item), operators_1.mergeMap(output => this._state.setSubject(output.Item)));
    }
    putItem(args, options) {
        if (!args.Item)
            throw 'PutItem requires an item';
        return this._client.putItem(args, options).pipe(operators_1.mergeMap(() => this._state.setSubject(args.Item)));
    }
    ;
    scan(args, options) {
        return this._client
            .scan(args, options)
            .pipe(operators_1.mergeMap(output => (output.Items || []).map(item => this._state.getSubject(item) || this._state.setSubject(item))), operators_1.zipAll());
    }
}
exports.RxjsDynamoDB = RxjsDynamoDB;
//# sourceMappingURL=RxjsDynamoDB.js.map