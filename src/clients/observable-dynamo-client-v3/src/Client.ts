/*
  GPL 3.0 License

  ObservableDynamoDB - An Observable DynamoDB Client

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

import { DynamoDBClientResolvedConfig } from '@aws-sdk/client-dynamodb';
import { from, Observable } from "rxjs";
import { Client as __Client } from "@aws-sdk/smithy-client";
import { Command, MetadataBearer } from '@aws-sdk/types';

export class Client<
  HandlerOptions,
  ClientInput extends object,
  ClientOutput extends MetadataBearer
>
{
  private _client: __Client<HandlerOptions, ClientInput, ClientOutput, DynamoDBClientResolvedConfig>;

  constructor(config: DynamoDBClientResolvedConfig) {
    this._client = new __Client(config);
  }

  send<InputType extends ClientInput, OutputType extends ClientOutput>(
    command: Command<ClientInput, InputType, ClientOutput, OutputType, DynamoDBClientResolvedConfig>,
    options?: HandlerOptions
  ): Observable<OutputType> {
    return from(this._client.send<InputType, OutputType>(command, options))
  }

  destroy(): void {
    this._client.destroy();
  };
}
