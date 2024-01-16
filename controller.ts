import { Request, Response } from "express";
import { DynamoDBInstance } from "./db";
import { config } from "./db.credentials";

const TABLE_NAME = "enrollment_v2_product_config";

const rowClient = new DynamoDBInstance(config.row);
const cnClient = new DynamoDBInstance(config.cn);

export const cloneItem = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const retrievedItem = await rowClient.getItem(TABLE_NAME, { id });

    if (!retrievedItem) {
      console.log({ error: "Item not found" });
    }

    //clone item to CN
    await cnClient.insertItem(TABLE_NAME, { ...retrievedItem });

    res.status(200).json({ message: "Item cloned successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
