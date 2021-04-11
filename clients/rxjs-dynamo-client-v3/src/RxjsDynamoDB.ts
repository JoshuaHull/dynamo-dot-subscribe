import { ObservableDynamoDBClient } from 'observable-dynamo-client-v3';
import { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { BehaviorSubject } from "rxjs";

export class RxjsDynamoDB {
  private _client: ObservableDynamoDBClient;

  constructor(config: DynamoDBClientConfig) {
    this._client = new ObservableDynamoDBClient(config);
  }

  public sendQuery(query: any): BehaviorSubject<any> {
    return new BehaviorSubject(null);
  }

  public sendCommand(command: any): BehaviorSubject<any> {
    return new BehaviorSubject(null);
  }
}
