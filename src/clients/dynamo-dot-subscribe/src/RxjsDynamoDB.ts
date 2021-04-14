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

import { ObservableDynamoDBClient } from '@dynamo-dot-subscribe/observable-dynamo';
import { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { BehaviorSubject } from "rxjs";

export class RxjsDynamoDB {
  private _client: ObservableDynamoDBClient;

  constructor(config: DynamoDBClientConfig) {
    this._client = new ObservableDynamoDBClient(config);
  }

  public sendQuery(query: any): BehaviorSubject<any> {
    return new BehaviorSubject(null);
  }

  public sendCommand(command: any): BehaviorSubject<any> {
    return new BehaviorSubject(null);
  }
}
