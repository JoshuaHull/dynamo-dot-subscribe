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

import { GetItemCommandOptions, ObservableDynamoDB, PutItemCommandOptions, ScanCommandOptions } from '@dynamo-dot-subscribe/observable-dynamo';
import { AttributeValue, DynamoDBClientConfig, GetItemCommandInput, PutItemCommand, PutItemCommandInput, ScanCommand, ScanCommandInput } from '@aws-sdk/client-dynamodb';
import { BehaviorSubject, Observable } from "rxjs";
import { combineAll, filter, map, mergeAll, mergeMap, zipAll } from 'rxjs/operators';
import { State } from './State';

type DynamoItem = { [key: string]: AttributeValue } | undefined;
type StateItem = NonNullable<DynamoItem>;

interface MoreConfig {
  tableName: string;
  hashKey: string;
  rangeKey?: string;
}

export type Config = DynamoDBClientConfig & MoreConfig;

export class RxjsDynamoDB {
  private _client: ObservableDynamoDB;
  private _state: State<StateItem>;

  constructor(config: Config) {
    this._client = new ObservableDynamoDB(config);
    const toKey = (item: StateItem) => item
      ? `${config.tableName}:${item[config.hashKey]}:${config.rangeKey ? item[config.rangeKey] : ''}`
      : '';
    this._state = new State<StateItem>(toKey);
  }

  public getItem(
    args: GetItemCommandInput,
    options?: GetItemCommandOptions
  ): Observable<StateItem> {
    if (!args.Key) throw 'GetItem requires a key';
    return this._state.getSubject(args.Key) ||
      this._client.getItem(args, options).pipe(
        filter(output => !!output.Item),
        mergeMap(output => this._state.setSubject(output.Item!)),
      );
  }

  public putItem(
    args: PutItemCommandInput,
    options?: PutItemCommandOptions
  ): Observable<StateItem> {
    if (!args.Item) throw 'PutItem requires an item';
    return this._client.putItem(args, options).pipe(
      mergeMap(() => this._state.setSubject(args.Item!))
    );
  };

  public scan(
    args: ScanCommandInput,
    options?: ScanCommandOptions
  ): Observable<StateItem[]> {
    return this._client
      .scan(args, options)
      .pipe(
        mergeMap(output => (output.Items || []).map(
          item => this._state.getSubject(item) || this._state.setSubject(item)
        )),
        zipAll()
      );
  }
}
