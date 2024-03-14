import express from "express";
import conf from "./config/conf.js";
import dbConnect from "./db/dbConnection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/message.js";
import { app, server } from "./socket/socket.js";

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(cookieParser());
app.use(
  cors({
    origin: "https://chatsphere-akash.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
// for parsing cookies

// for handling invalid JSON format in the request body
app.use((err, _, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format in the request body",
    });
  }
  next(err);
});

const PORT = conf.PORT || 8001;

app.get("/", async (req, res) => {
  res.send("server is running!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

server.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}!`);
});
