import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./utils/connectToDB";
import {
  updateBitcoinPriceInDB,
  getBitcoinLatestPriceFromDB,
} from "./controller/bitcoin";
connectDB();
updateBitcoinPriceInDB();

const app: Express = express();
app.get("/latest-price", async (req: Request, res: Response): Promise<void> => {
  try {
    const resp = await getBitcoinLatestPriceFromDB();
    res.json(resp);
  } catch (err) {
    res.send("Internal server error");
  }
});

app.listen(3000, (): void => {
  console.log("server is running");
});
