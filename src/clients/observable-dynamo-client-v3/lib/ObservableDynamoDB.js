"use strict";
/*
  GPL 3.0 License

  ObservableDynamoDB - An Observable DynamoDB Client

  Copyright (C) 2020 Joshua Hull

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableDynamoDB = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const ObservableDynamoDBClient_1 = require("./ObservableDynamoDBClient");
class ObservableDynamoDB extends ObservableDynamoDBClient_1.ObservableDynamoDBClient {
    batchExecuteStatement(args, options) {
        return this.send(new client_dynamodb_1.BatchExecuteStatementCommand(args), options);
    }
    batchGetItem(args, options) {
        return this.send(new client_dynamodb_1.BatchGetItemCommand(args), options);
    }
    createBackup(args, options) {
        return this.send(new client_dynamodb_1.CreateBackupCommand(args), options);
    }
    batchWriteItem(args, options) {
        return this.send(new client_dynamodb_1.BatchWriteItemCommand(args), options);
    }
    createGlobalTable(args, options) {
        return this.send(new client_dynamodb_1.CreateGlobalTableCommand(args), options);
    }
    deleteBackup(args, options) {
        return this.send(new client_dynamodb_1.DeleteBackupCommand(args), options);
    }
    deleteItem(args, options) {
        return this.send(new client_dynamodb_1.DeleteItemCommand(args), options);
    }
    deleteTable(args, options) {
        return this.send(new client_dynamodb_1.DeleteTableCommand(args), options);
    }
    describeBackup(args, options) {
        return this.send(new client_dynamodb_1.DescribeBackupCommand(args), options);
    }
    describeContinuousBackups(args, options) {
        return this.send(new client_dynamodb_1.DescribeContinuousBackupsCommand(args), options);
    }
    describeContributorInsights(args, options) {
        return this.send(new client_dynamodb_1.DescribeContributorInsightsCommand(args), options);
    }
    describeEndpoints(args, options) {
        return this.send(new client_dynamodb_1.DescribeEndpointsCommand(args), options);
    }
    describeExport(args, options) {
        return this.send(new client_dynamodb_1.DescribeExportCommand(args), options);
    }
    describeGlobalTable(args, options) {
        return this.send(new client_dynamodb_1.DescribeGlobalTableCommand(args), options);
    }
    describeGlobalTableSettings(args, options) {
        return this.send(new client_dynamodb_1.DescribeGlobalTableSettingsCommand(args), options);
    }
    describeKinesisStreamingDestination(args, options) {
        return this.send(new client_dynamodb_1.DescribeKinesisStreamingDestinationCommand(args), options);
    }
    describeLimits(args, options) {
        return this.send(new client_dynamodb_1.DescribeLimitsCommand(args), options);
    }
    describeTable(args, options) {
        return this.send(new client_dynamodb_1.DescribeTableCommand(args), options);
    }
    describeTableReplicaAutoScaling(args, options) {
        return this.send(new client_dynamodb_1.DescribeTableReplicaAutoScalingCommand(args), options);
    }
    describeTimeToLive(args, options) {
        return this.send(new client_dynamodb_1.DescribeTimeToLiveCommand(args), options);
    }
    disableKinesisStreamingDestination(args, options) {
        return this.send(new client_dynamodb_1.DisableKinesisStreamingDestinationCommand(args), options);
    }
    enableKinesisStreamingDestination(args, options) {
        return this.send(new client_dynamodb_1.EnableKinesisStreamingDestinationCommand(args), options);
    }
    executeStatement(args, options) {
        return this.send(new client_dynamodb_1.ExecuteStatementCommand(args), options);
    }
    executeTransaction(args, options) {
        return this.send(new client_dynamodb_1.ExecuteTransactionCommand(args), options);
    }
    exportTableToPointInTime(args, options) {
        return this.send(new client_dynamodb_1.ExportTableToPointInTimeCommand(args), options);
    }
    getItem(args, options) {
        return this.send(new client_dynamodb_1.GetItemCommand(args), options);
    }
    listBackups(args, options) {
        return this.send(new client_dynamodb_1.ListBackupsCommand(args), options);
    }
    listContributorInsights(args, options) {
        return this.send(new client_dynamodb_1.ListContributorInsightsCommand(args), options);
    }
    listExports(args, options) {
        return this.send(new client_dynamodb_1.ListExportsCommand(args), options);
    }
    listGlobalTables(args, options) {
        return this.send(new client_dynamodb_1.ListGlobalTablesCommand(args), options);
    }
    listTables(args, options) {
        return this.send(new client_dynamodb_1.ListTablesCommand(args), options);
    }
    listTagsOfResource(args, options) {
        return this.send(new client_dynamodb_1.ListTagsOfResourceCommand(args), options);
    }
    putItem(args, options) {
        return this.send(new client_dynamodb_1.PutItemCommand(args), options);
    }
    query(args, options) {
        return this.send(new client_dynamodb_1.QueryCommand(args), options);
    }
    restoreTableFromBackup(args, options) {
        return this.send(new client_dynamodb_1.RestoreTableFromBackupCommand(args), options);
    }
    restoreTableToPointInTime(args, options) {
        return this.send(new client_dynamodb_1.RestoreTableToPointInTimeCommand(args), options);
    }
    scan(args, options) {
        return this.send(new client_dynamodb_1.ScanCommand(args), options);
    }
    tagResource(args, options) {
        return this.send(new client_dynamodb_1.TagResourceCommand(args), options);
    }
    transactGetItems(args, options) {
        return this.send(new client_dynamodb_1.TransactGetItemsCommand(args), options);
    }
    transactWriteItems(args, options) {
        return this.send(new client_dynamodb_1.TransactWriteItemsCommand(args), options);
    }
    untagResource(args, options) {
        return this.send(new client_dynamodb_1.UntagResourceCommand(args), options);
    }
    updateContinuousBackups(args, options) {
        return this.send(new client_dynamodb_1.UpdateContinuousBackupsCommand(args), options);
    }
    updateContributorInsights(args, options) {
        return this.send(new client_dynamodb_1.UpdateContributorInsightsCommand(args), options);
    }
    updateGlobalTable(args, options) {
        return this.send(new client_dynamodb_1.UpdateGlobalTableCommand(args), options);
    }
    updateGlobalTableSettings(args, options) {
        return this.send(new client_dynamodb_1.UpdateGlobalTableSettingsCommand(args), options);
    }
    updateItem(args, options) {
        return this.send(new client_dynamodb_1.UpdateItemCommand(args), options);
    }
    updateTable(args, options) {
        return this.send(new client_dynamodb_1.UpdateTableCommand(args), options);
    }
    updateTableReplicaAutoScaling(args, options) {
        return this.send(new client_dynamodb_1.UpdateTableReplicaAutoScalingCommand(args), options);
    }
    updateTimeToLive(args, options) {
        return this.send(new client_dynamodb_1.UpdateTimeToLiveCommand(args), options);
    }
    destroy() {
        this.destroy();
    }
}
exports.ObservableDynamoDB = ObservableDynamoDB;
//# sourceMappingURL=ObservableDynamoDB.js.map