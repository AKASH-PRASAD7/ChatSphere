import dotenv from "dotenv";
dotenv.config();

const conf = {
  PORT: String(process.env.PORT),
  MONGODB_URI: String(process.env.MONGODB_URI),
};

export default conf;
