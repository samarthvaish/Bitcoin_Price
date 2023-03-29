import mongoose from "mongoose";

const bitcoinSchema = new mongoose.Schema(
  {
    symbol: { type: String },
    price: { type: String },
  },
  { timestamps: true }
);

const bitcoinModel = mongoose.model("bitcoin", bitcoinSchema);
export default bitcoinModel;
