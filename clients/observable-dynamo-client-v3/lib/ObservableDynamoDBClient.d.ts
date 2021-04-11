import { DynamoDBClientConfig, ServiceInputTypes, ServiceOutputTypes } from '@aws-sdk/client-dynamodb';
import { HttpHandlerOptions as __HttpHandlerOptions } from '@aws-sdk/types';
import { Client } from './Client';
export declare class ObservableDynamoDBClient extends Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes> {
    constructor(config: DynamoDBClientConfig);
}
