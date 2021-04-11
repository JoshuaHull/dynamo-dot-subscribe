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
