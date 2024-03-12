import dotenv from "dotenv";
dotenv.config();

const conf = {
  PORT: String(process.env.PORT),
};

export default conf;
