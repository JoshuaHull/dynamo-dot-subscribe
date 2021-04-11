import { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { BehaviorSubject } from "rxjs";
export declare class RxjsDynamoDB {
    private _client;
    constructor(config: DynamoDBClientConfig);
    sendQuery(query: any): BehaviorSubject<any>;
    sendCommand(command: any): BehaviorSubject<any>;
}
