import express from "express";
import conf from "./config/conf.js";
const app = express();
const PORT = conf.PORT || 8001;

app.get("/", (req, res) => {
  res.send("server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
