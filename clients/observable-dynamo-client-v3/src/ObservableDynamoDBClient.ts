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
