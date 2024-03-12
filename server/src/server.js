import express from "express";
import conf from "./config/conf.js";
import dbConnect from "./db/dbConnection.js";
const app = express();

const PORT = conf.PORT || 8001;

app.get("/", async (req, res) => {
  res.send("server is running!");
});

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}!`);
});
