import express, { Request, Response } from "express";
import { cloneItem } from "./controller";

// Create Express app
const app = express();

// Define a route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/clone/:id", async (req: Request, res: Response) => {
  return cloneItem(req, res);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
