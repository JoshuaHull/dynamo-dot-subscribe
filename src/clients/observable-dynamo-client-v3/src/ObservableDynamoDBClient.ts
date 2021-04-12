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

import {
  DynamoDBClient,
  DynamoDBClientConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from '@aws-sdk/client-dynamodb';
import { HttpHandlerOptions as __HttpHandlerOptions } from '@aws-sdk/types';
import { Client } from './Client';

export class ObservableDynamoDBClient extends Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes
>
{
  constructor(config: DynamoDBClientConfig) {
    const resolved = new DynamoDBClient(config).config;
    super(resolved);
  }
}
