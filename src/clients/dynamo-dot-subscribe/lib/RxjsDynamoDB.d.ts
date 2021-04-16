import { GetItemCommandOptions, PutItemCommandOptions, ScanCommandOptions } from '@dynamo-dot-subscribe/observable-dynamo';
import { AttributeValue, DynamoDBClientConfig, GetItemCommandInput, PutItemCommandInput, ScanCommandInput } from '@aws-sdk/client-dynamodb';
import { Observable } from "rxjs";
declare type DynamoItem = {
    [key: string]: AttributeValue;
} | undefined;
declare type StateItem = NonNullable<DynamoItem>;
interface MoreConfig {
    tableName: string;
    hashKey: string;
    rangeKey?: string;
}
export declare type Config = DynamoDBClientConfig & MoreConfig;
export declare class RxjsDynamoDB {
    private _client;
    private _state;
    constructor(config: Config);
    getItem(args: GetItemCommandInput, options?: GetItemCommandOptions): Observable<StateItem>;
    putItem(args: PutItemCommandInput, options?: PutItemCommandOptions): Observable<StateItem>;
    scan(args: ScanCommandInput, options?: ScanCommandOptions): Observable<StateItem[]>;
}
export {};
