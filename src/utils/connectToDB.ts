import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri: string = process.env?.MONGO_URI || "";
    const conn = await mongoose.connect(uri);
    console.log(`Mongo has connected to ${conn.connection.host}`);
  } catch (error: any) {
    console.log(`Error: ${error?.message}`);
    process.exit(1);
  }
};

export default connectDB;
