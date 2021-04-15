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

import { GetItemCommandOptions, ObservableDynamoDBClient } from '@dynamo-dot-subscribe/observable-dynamo';
import { AttributeValue, DynamoDBClientConfig, GetItemCommandInput } from '@aws-sdk/client-dynamodb';
import { BehaviorSubject } from "rxjs";
import { State } from './State';

type DynamoItem = { [key: string]: AttributeValue } | undefined;
type StateItem = NonNullable<DynamoItem>;

export class RxjsDynamoDB {
  private _client: ObservableDynamoDBClient;
  private _state: State<StateItem>;

  constructor(config: DynamoDBClientConfig & MoreConfig) {
    this._client = new ObservableDynamoDBClient(config);
    const toKey = (item: StateItem) => item
      ? `${config.tableName}:${item[config.hashKey]}:${config.rangeKey ? item[config.rangeKey] : ''}`
      : '';
    this._state = new State<StateItem>(toKey);
  }

  public getItem(
    args: GetItemCommandInput,
    options?: GetItemCommandOptions
  ): BehaviorSubject<StateItem> {
    // return this._client.send(new GetItemCommand(args), options);
    if (!args.Key) throw 'Key cannot be undefined';
    return this._state
      .getItem(args.Key).pipe();
  }
}

export interface MoreConfig {
  tableName: string;
  hashKey: string;
  rangeKey?: string;
}
