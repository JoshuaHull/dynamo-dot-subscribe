import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput,
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
  CreateGlobalTableCommand,
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput,
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
  DeleteItemCommand,
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DeleteTableCommand,
  DeleteTableCommandInput,
  DeleteTableCommandOutput,
  DescribeBackupCommand,
  DescribeBackupCommandInput,
  DescribeBackupCommandOutput,
  DescribeContinuousBackupsCommand,
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput,
  DescribeContributorInsightsCommand,
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput,
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
  DescribeExportCommand,
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
  DescribeGlobalTableCommand,
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput,
  DescribeGlobalTableSettingsCommand,
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput,
  DescribeKinesisStreamingDestinationCommand,
  DescribeKinesisStreamingDestinationCommandInput,
  DescribeKinesisStreamingDestinationCommandOutput,
  DescribeLimitsCommand,
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
  DescribeTableReplicaAutoScalingCommand,
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput,
  DescribeTimeToLiveCommand,
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput,
  DisableKinesisStreamingDestinationCommand,
  DisableKinesisStreamingDestinationCommandInput,
  DisableKinesisStreamingDestinationCommandOutput,
  EnableKinesisStreamingDestinationCommand,
  EnableKinesisStreamingDestinationCommandInput,
  EnableKinesisStreamingDestinationCommandOutput,
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommand,
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  ExportTableToPointInTimeCommand,
  ExportTableToPointInTimeCommandInput,
  ExportTableToPointInTimeCommandOutput,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  ListBackupsCommand,
  ListBackupsCommandInput,
  ListBackupsCommandOutput,
  ListContributorInsightsCommand,
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput,
  ListExportsCommand,
  ListExportsCommandInput,
  ListExportsCommandOutput,
  ListGlobalTablesCommand,
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput,
  ListTablesCommand,
  ListTablesCommandInput,
  ListTablesCommandOutput,
  ListTagsOfResourceCommand,
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  RestoreTableFromBackupCommand,
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput,
  RestoreTableToPointInTimeCommand,
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput,
  ScanCommand,
  ScanCommandInput,
  ScanCommandOutput,
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput,
  TransactGetItemsCommand,
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
  TransactWriteItemsCommand,
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput,
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
  UpdateContinuousBackupsCommand,
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput,
  UpdateContributorInsightsCommand,
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput,
  UpdateGlobalTableCommand,
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput,
  UpdateGlobalTableSettingsCommand,
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput,
  UpdateItemCommand,
  UpdateItemCommandInput,
  UpdateItemCommandOutput,
  UpdateTableCommand,
  UpdateTableCommandInput,
  UpdateTableCommandOutput,
  UpdateTableReplicaAutoScalingCommand,
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput,
  UpdateTimeToLiveCommand,
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput,
  DynamoDB,
} from '@aws-sdk/client-dynamodb';
import { Observable } from 'rxjs';
import { ObservableDynamoDBClient } from './ObservableDynamoDBClient';

export type BatchExecuteStatementCommandOptions = Parameters<InstanceType<typeof DynamoDB>['batchExecuteStatement']>[1];
export type BatchGetItemCommandOptions = Parameters<InstanceType<typeof DynamoDB>['batchGetItem']>[1];
export type BatchWriteItemCommandOptions = Parameters<InstanceType<typeof DynamoDB>['batchWriteItem']>[1];
export type CreateBackupCommandOptions = Parameters<InstanceType<typeof DynamoDB>['createBackup']>[1];
export type CreateGlobalTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['createGlobalTable']>[1];
export type CreateTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['createTable']>[1];
export type DeleteBackupCommandOptions = Parameters<InstanceType<typeof DynamoDB>['deleteBackup']>[1];
export type DeleteItemCommandOptions = Parameters<InstanceType<typeof DynamoDB>['deleteItem']>[1];
export type DeleteTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['deleteTable']>[1];
export type DescribeBackupCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeBackup']>[1];
export type DescribeContinuousBackupsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeContinuousBackups']>[1];
export type DescribeContributorInsightsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeContributorInsights']>[1];
export type DescribeEndpointsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeEndpoints']>[1];
export type DescribeExportCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeExport']>[1];
export type DescribeGlobalTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeGlobalTable']>[1];
export type DescribeGlobalTableSettingsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeGlobalTableSettings']>[1];
export type DescribeKinesisStreamingDestinationCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeKinesisStreamingDestination']>[1];
export type DescribeLimitsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeLimits']>[1];
export type DescribeTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeTable']>[1];
export type DescribeTableReplicaAutoScalingCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeTableReplicaAutoScaling']>[1];
export type DescribeTimeToLiveCommandOptions = Parameters<InstanceType<typeof DynamoDB>['describeTimeToLive']>[1];
export type DisableKinesisStreamingDestinationCommandOptions = Parameters<InstanceType<typeof DynamoDB>['disableKinesisStreamingDestination']>[1];
export type EnableKinesisStreamingDestinationCommandOptions = Parameters<InstanceType<typeof DynamoDB>['enableKinesisStreamingDestination']>[1];
export type ExecuteStatementCommandOptions = Parameters<InstanceType<typeof DynamoDB>['executeStatement']>[1];
export type ExecuteTransactionCommandOptions = Parameters<InstanceType<typeof DynamoDB>['executeTransaction']>[1];
export type ExportTableToPointInTimeCommandOptions = Parameters<InstanceType<typeof DynamoDB>['exportTableToPointInTime']>[1];
export type GetItemCommandOptions = Parameters<InstanceType<typeof DynamoDB>['getItem']>[1];
export type ListBackupsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['listBackups']>[1];
export type ListContributorInsightsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['listContributorInsights']>[1];
export type ListExportsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['listExports']>[1];
export type ListGlobalTablesCommandOptions = Parameters<InstanceType<typeof DynamoDB>['listGlobalTables']>[1];
export type ListTablesCommandOptions = Parameters<InstanceType<typeof DynamoDB>['listTables']>[1];
export type ListTagsOfResourceCommandOptions = Parameters<InstanceType<typeof DynamoDB>['listTagsOfResource']>[1];
export type PutItemCommandOptions = Parameters<InstanceType<typeof DynamoDB>['putItem']>[1];
export type QueryCommandOptions = Parameters<InstanceType<typeof DynamoDB>['query']>[1];
export type RestoreTableFromBackupCommandOptions = Parameters<InstanceType<typeof DynamoDB>['restoreTableFromBackup']>[1];
export type RestoreTableToPointInTimeCommandOptions = Parameters<InstanceType<typeof DynamoDB>['restoreTableToPointInTime']>[1];
export type ScanCommandOptions = Parameters<InstanceType<typeof DynamoDB>['scan']>[1];
export type TagResourceCommandOptions = Parameters<InstanceType<typeof DynamoDB>['tagResource']>[1];
export type TransactGetItemsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['transactGetItems']>[1];
export type TransactWriteItemsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['transactWriteItems']>[1];
export type UntagResourceCommandOptions = Parameters<InstanceType<typeof DynamoDB>['untagResource']>[1];
export type UpdateContinuousBackupsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateContinuousBackups']>[1];
export type UpdateContributorInsightsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateContributorInsights']>[1];
export type UpdateGlobalTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateGlobalTable']>[1];
export type UpdateGlobalTableSettingsCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateGlobalTableSettings']>[1];
export type UpdateItemCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateItem']>[1];
export type UpdateTableCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateTable']>[1];
export type UpdateTableReplicaAutoScalingCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateTableReplicaAutoScaling']>[1];
export type UpdateTimeToLiveCommandOptions = Parameters<InstanceType<typeof DynamoDB>['updateTimeToLive']>[1];

export class ObservableDynamoDB extends ObservableDynamoDBClient {

  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: BatchExecuteStatementCommandOptions
  ): Observable<BatchExecuteStatementCommandOutput> {
    return this.send(new BatchExecuteStatementCommand(args), options);
  }

  public batchGetItem(
    args: BatchGetItemCommandInput,
    options?: BatchGetItemCommandOptions
  ): Observable<BatchGetItemCommandOutput> {
    return this.send(new BatchGetItemCommand(args), options);
  }

  public createBackup(
    args: CreateBackupCommandInput,
    options?: CreateBackupCommandOptions
  ): Observable<CreateBackupCommandOutput> {
    return this.send(new CreateBackupCommand(args), options);
  }

  public batchWriteItem(
    args: BatchWriteItemCommandInput,
    options?: BatchWriteItemCommandOptions
  ): Observable<BatchWriteItemCommandOutput> {
    return this.send(new BatchWriteItemCommand(args), options);
  }

  public createGlobalTable(
    args: CreateGlobalTableCommandInput,
    options?: CreateGlobalTableCommandOptions
  ): Observable<CreateGlobalTableCommandOutput> {
    return this.send(new CreateGlobalTableCommand(args), options);
  }

  public deleteBackup(
    args: DeleteBackupCommandInput,
    options?: DeleteBackupCommandOptions
  ): Observable<DeleteBackupCommandOutput> {
    return this.send(new DeleteBackupCommand(args), options);
  }

  public deleteItem(
    args: DeleteItemCommandInput,
    options?: DeleteItemCommandOptions
  ): Observable<DeleteItemCommandOutput> {
    return this.send(new DeleteItemCommand(args), options);
  }

  public deleteTable(
    args: DeleteTableCommandInput,
    options?: DeleteTableCommandOptions
  ): Observable<DeleteTableCommandOutput> {
    return this.send(new DeleteTableCommand(args), options);
  }

  public describeBackup(
    args: DescribeBackupCommandInput,
    options?: DescribeBackupCommandOptions
  ): Observable<DescribeBackupCommandOutput> {
    return this.send(new DescribeBackupCommand(args), options);
  }

  public describeContinuousBackups(
    args: DescribeContinuousBackupsCommandInput,
    options?: DescribeContinuousBackupsCommandOptions
  ): Observable<DescribeContinuousBackupsCommandOutput> {
    return this.send(new DescribeContinuousBackupsCommand(args), options);
  }

  public describeContributorInsights(
    args: DescribeContributorInsightsCommandInput,
    options?: DescribeContributorInsightsCommandOptions
  ): Observable<DescribeContributorInsightsCommandOutput> {
    return this.send(new DescribeContributorInsightsCommand(args), options);
  }

  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: DescribeEndpointsCommandOptions
  ): Observable<DescribeEndpointsCommandOutput> {
    return this.send(new DescribeEndpointsCommand(args), options);
  }

  public describeExport(
    args: DescribeExportCommandInput,
    options?: DescribeExportCommandOptions
  ): Observable<DescribeExportCommandOutput> {
    return this.send(new DescribeExportCommand(args), options);
  }

  public describeGlobalTable(
    args: DescribeGlobalTableCommandInput,
    options?: DescribeGlobalTableCommandOptions
  ): Observable<DescribeGlobalTableCommandOutput> {
    return this.send(new DescribeGlobalTableCommand(args), options);
  }

  public describeGlobalTableSettings(
    args: DescribeGlobalTableSettingsCommandInput,
    options?: DescribeGlobalTableSettingsCommandOptions
  ): Observable<DescribeGlobalTableSettingsCommandOutput> {
    return this.send(new DescribeGlobalTableSettingsCommand(args), options);
  }

  public describeKinesisStreamingDestination(
    args: DescribeKinesisStreamingDestinationCommandInput,
    options?: DescribeKinesisStreamingDestinationCommandOptions
  ): Observable<DescribeKinesisStreamingDestinationCommandOutput> {
    return this.send(new DescribeKinesisStreamingDestinationCommand(args), options);
  }

  public describeLimits(
    args: DescribeLimitsCommandInput,
    options?: DescribeLimitsCommandOptions
  ): Observable<DescribeLimitsCommandOutput> {
    return this.send(new DescribeLimitsCommand(args), options);
  }

  public describeTable(
    args: DescribeTableCommandInput,
    options?: DescribeTableCommandOptions
  ): Observable<DescribeTableCommandOutput> {
    return this.send(new DescribeTableCommand(args), options);
  }

  public describeTableReplicaAutoScaling(
    args: DescribeTableReplicaAutoScalingCommandInput,
    options?: DescribeTableReplicaAutoScalingCommandOptions
  ): Observable<DescribeTableReplicaAutoScalingCommandOutput> {
    return this.send(new DescribeTableReplicaAutoScalingCommand(args), options);
  }

  public describeTimeToLive(
    args: DescribeTimeToLiveCommandInput,
    options?: DescribeTimeToLiveCommandOptions
  ): Observable<DescribeTimeToLiveCommandOutput> {
    return this.send(new DescribeTimeToLiveCommand(args), options);
  }

  public disableKinesisStreamingDestination(
    args: DisableKinesisStreamingDestinationCommandInput,
    options?: DisableKinesisStreamingDestinationCommandOptions
  ): Observable<DisableKinesisStreamingDestinationCommandOutput> {
    return this.send(new DisableKinesisStreamingDestinationCommand(args), options);
  }

  public enableKinesisStreamingDestination(
    args: EnableKinesisStreamingDestinationCommandInput,
    options?: EnableKinesisStreamingDestinationCommandOptions
  ): Observable<EnableKinesisStreamingDestinationCommandOutput> {
    return this.send(new EnableKinesisStreamingDestinationCommand(args), options);
  }

  public executeStatement(
    args: ExecuteStatementCommandInput,
    options?: ExecuteStatementCommandOptions
  ): Observable<ExecuteStatementCommandOutput> {
    return this.send(new ExecuteStatementCommand(args), options);
  }

  public executeTransaction(
    args: ExecuteTransactionCommandInput,
    options?: ExecuteTransactionCommandOptions
  ): Observable<ExecuteTransactionCommandOutput> {
    return this.send(new ExecuteTransactionCommand(args), options);
  }

  public exportTableToPointInTime(
    args: ExportTableToPointInTimeCommandInput,
    options?: ExportTableToPointInTimeCommandOptions
  ): Observable<ExportTableToPointInTimeCommandOutput> {
    return this.send(new ExportTableToPointInTimeCommand(args), options);
  }

  public getItem(
    args: GetItemCommandInput,
    options?: GetItemCommandOptions
  ): Observable<GetItemCommandOutput> {
    return this.send(new GetItemCommand(args), options);
  }

  public listBackups(
    args: ListBackupsCommandInput,
    options?: ListBackupsCommandOptions
  ): Observable<ListBackupsCommandOutput> {
    return this.send(new ListBackupsCommand(args), options);
  }

  public listContributorInsights(
    args: ListContributorInsightsCommandInput,
    options?: ListContributorInsightsCommandOptions
  ): Observable<ListContributorInsightsCommandOutput> {
    return this.send(new ListContributorInsightsCommand(args), options);
  }

  public listExports(
    args: ListExportsCommandInput,
    options?: ListExportsCommandOptions
  ): Observable<ListExportsCommandOutput> {
    return this.send(new ListExportsCommand(args), options);
  }

  public listGlobalTables(
    args: ListGlobalTablesCommandInput,
    options?: ListGlobalTablesCommandOptions
  ): Observable<ListGlobalTablesCommandOutput> {
    return this.send(new ListGlobalTablesCommand(args), options);
  }

  public listTables(
    args: ListTablesCommandInput,
    options?: ListTablesCommandOptions
  ): Observable<ListTablesCommandOutput> {
    return this.send(new ListTablesCommand(args), options);
  }

  public listTagsOfResource(
    args: ListTagsOfResourceCommandInput,
    options?: ListTagsOfResourceCommandOptions
  ): Observable<ListTagsOfResourceCommandOutput> {
    return this.send(new ListTagsOfResourceCommand(args), options);
  }

  public putItem(
    args: PutItemCommandInput,
    options?: PutItemCommandOptions
  ): Observable<PutItemCommandOutput> {
    return this.send(new PutItemCommand(args), options);
  }

  public query(
    args: QueryCommandInput,
    options?: QueryCommandOptions
  ): Observable<QueryCommandOutput> {
    return this.send(new QueryCommand(args), options);
  }

  public restoreTableFromBackup(
    args: RestoreTableFromBackupCommandInput,
    options?: RestoreTableFromBackupCommandOptions
  ): Observable<RestoreTableFromBackupCommandOutput> {
    return this.send(new RestoreTableFromBackupCommand(args), options);
  }

  public restoreTableToPointInTime(
    args: RestoreTableToPointInTimeCommandInput,
    options?: RestoreTableToPointInTimeCommandOptions
  ): Observable<RestoreTableToPointInTimeCommandOutput> {
    return this.send(new RestoreTableToPointInTimeCommand(args), options);
  }

  public scan(
    args: ScanCommandInput,
    options?: ScanCommandOptions
  ): Observable<ScanCommandOutput> {
    return this.send(new ScanCommand(args), options);
  }

  public tagResource(
    args: TagResourceCommandInput,
    options?: TagResourceCommandOptions
  ): Observable<TagResourceCommandOutput> {
    return this.send(new TagResourceCommand(args), options);
  }

  public transactGetItems(
    args: TransactGetItemsCommandInput,
    options?: TransactGetItemsCommandOptions
  ): Observable<TransactGetItemsCommandOutput> {
    return this.send(new TransactGetItemsCommand(args), options);
  }

  public transactWriteItems(
    args: TransactWriteItemsCommandInput,
    options?: TransactWriteItemsCommandOptions
  ): Observable<TransactWriteItemsCommandOutput> {
    return this.send(new TransactWriteItemsCommand(args), options);
  }

  public untagResource(
    args: UntagResourceCommandInput,
    options?: UntagResourceCommandOptions
  ): Observable<UntagResourceCommandOutput> {
    return this.send(new UntagResourceCommand(args), options);
  }

  public updateContinuousBackups(
    args: UpdateContinuousBackupsCommandInput,
    options?: UpdateContinuousBackupsCommandOptions
  ): Observable<UpdateContinuousBackupsCommandOutput> {
    return this.send(new UpdateContinuousBackupsCommand(args), options);
  }

  public updateContributorInsights(
    args: UpdateContributorInsightsCommandInput,
    options?: UpdateContributorInsightsCommandOptions
  ): Observable<UpdateContributorInsightsCommandOutput> {
    return this.send(new UpdateContributorInsightsCommand(args), options);
  }

  public updateGlobalTable(
    args: UpdateGlobalTableCommandInput,
    options?: UpdateGlobalTableCommandOptions
  ): Observable<UpdateGlobalTableCommandOutput> {
    return this.send(new UpdateGlobalTableCommand(args), options);
  }

  public updateGlobalTableSettings(
    args: UpdateGlobalTableSettingsCommandInput,
    options?: UpdateGlobalTableSettingsCommandOptions
  ): Observable<UpdateGlobalTableSettingsCommandOutput> {
    return this.send(new UpdateGlobalTableSettingsCommand(args), options);
  }

  public updateItem(
    args: UpdateItemCommandInput,
    options?: UpdateItemCommandOptions
  ): Observable<UpdateItemCommandOutput> {
    return this.send(new UpdateItemCommand(args), options);
  }

  public updateTable(
    args: UpdateTableCommandInput,
    options?: UpdateTableCommandOptions
  ): Observable<UpdateTableCommandOutput> {
    return this.send(new UpdateTableCommand(args), options);
  }

  public updateTableReplicaAutoScaling(
    args: UpdateTableReplicaAutoScalingCommandInput,
    options?: UpdateTableReplicaAutoScalingCommandOptions
  ): Observable<UpdateTableReplicaAutoScalingCommandOutput> {
    return this.send(new UpdateTableReplicaAutoScalingCommand(args), options);
  }

  public updateTimeToLive(
    args: UpdateTimeToLiveCommandInput,
    options?: UpdateTimeToLiveCommandOptions
  ): Observable<UpdateTimeToLiveCommandOutput> {
    return this.send(new UpdateTimeToLiveCommand(args), options);
  }

  destroy(): void {
    this.destroy();
  }
}
