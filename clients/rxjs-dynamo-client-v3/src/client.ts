import { DynamoDBClient, ServiceOutputTypes } from '@aws-sdk/client-dynamodb';

type SendParameters = Parameters<InstanceType<typeof DynamoDBClient>['send']>;
type DestroyParameters = Parameters<InstanceType<typeof DynamoDBClient>['destroy']>;

export class RxjsDynamoDbClient {
  private _client: DynamoDBClient;

  constructor(client: DynamoDBClient) {
    this._client = client;
  }

  send(params: SendParameters): Promise<ServiceOutputTypes> {
    return this._client.send(params[0], params[1]);
  }

  destroy(params: DestroyParameters): void {};
}
