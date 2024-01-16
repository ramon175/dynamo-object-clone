import { DynamoDBClient, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  PutCommand,
  PutCommandInput,
} from "@aws-sdk/lib-dynamodb";

export class DynamoDBInstance {
  private client: DynamoDBClient;
  private docClient: DynamoDBDocumentClient;

  constructor(config: DynamoDBClientConfig) {
    this.client = new DynamoDBClient(config);
    this.docClient = DynamoDBDocumentClient.from(this.client);
  }

  async insertItem(
    tableName: string,
    item: Record<string, any>
  ): Promise<void> {
    const params: PutCommandInput = {
      TableName: tableName,
      Item: item,
    };

    const command = new PutCommand(params);

    try {
      await this.docClient.send(command);
      console.log("Item inserted successfully");
    } catch (error) {
      console.error("Error inserting item:", error);
      throw error;
    }
  }

  async getItem(
    tableName: string,
    key: Record<string, any>
  ): Promise<Record<string, any> | null> {
    const params: GetCommandInput = {
      TableName: tableName,
      Key: key,
    };

    const command = new GetCommand(params);

    try {
      const response = await this.docClient.send(command);
      return response.Item ?? null;
    } catch (error) {
      console.error("Error getting item:", error);
      throw error;
    }
  }
}
