import { updateBitcoinPrice, getBitcoinLatestPrice } from "../service/bitcoin";

export const updateBitcoinPriceInDB = (): void => {
  updateBitcoinPrice();
  setInterval(updateBitcoinPrice, 300000);
};

export const getBitcoinLatestPriceFromDB = async (): Promise<any> => {
  return await getBitcoinLatestPrice();
};
