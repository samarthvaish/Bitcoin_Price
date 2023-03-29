import axios from "axios";
import bitcoinModel from "../model/bitcoin";

export const updateBitcoinPrice = async (): Promise<void> => {
  try {
    const bitcoinPriceUrl: string = process?.env?.BITCOIN_PRICE_URL || "";
    const reponse = await axios.get(bitcoinPriceUrl);
    await bitcoinModel.create(reponse.data);
  } catch (err: any) {
    console.log(err?.message || err?.stack);
  }
};

export const getBitcoinLatestPrice = async (): Promise<any> => {
  try {
    const response = await bitcoinModel
      .find({}, "price symbol updatedAt -_id")
      .sort({ _id: -1 })
      .limit(1)
      .lean();
    return response?.[0];
  } catch (err: any) {
    console.log(err?.message || err?.stack);
  }
};
