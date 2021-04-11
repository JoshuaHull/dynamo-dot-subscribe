import { DynamoDBClientResolvedConfig } from '@aws-sdk/client-dynamodb';
import { Observable } from "rxjs";
import { Command, MetadataBearer } from '@aws-sdk/types';
export declare class Client<HandlerOptions, ClientInput extends object, ClientOutput extends MetadataBearer> {
    private _client;
    constructor(config: DynamoDBClientResolvedConfig);
    send<InputType extends ClientInput, OutputType extends ClientOutput>(command: Command<ClientInput, InputType, ClientOutput, OutputType, DynamoDBClientResolvedConfig>, options?: HandlerOptions): Observable<OutputType>;
    destroy(): void;
}
