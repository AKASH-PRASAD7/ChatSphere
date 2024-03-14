import dotenv from "dotenv";
dotenv.config();

const conf = {
  PORT: String(process.env.PORT),
  MONGODB_URI: String(process.env.MONGODB_URI),
  JWT_SECRET_KEY: String(process.env.JWT_SECRET_KEY),
  CLIENT_URL: String(process.env.CLIENT_URL),
};

export default conf;
