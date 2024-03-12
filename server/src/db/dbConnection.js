import mongoose from "mongoose";
import conf from "../config/conf.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(conf.MONGODB_URI);
    console.log("Connected To MongoDb!");
  } catch (error) {
    console.log(`Failed to connect to Db: ${error.message}`);
  }
};

export default dbConnect;
