import { DynamoDBClientConfig, DynamoDBClientResolvedConfig } from '@aws-sdk/client-dynamodb';
import { Observable } from 'rxjs';
export declare class ObservableDynamoDBClient {
    private client;
    get config(): DynamoDBClientResolvedConfig;
    constructor(config: DynamoDBClientConfig);
    send(args: any, options?: any): Observable<any>;
    destroy(): void;
}
