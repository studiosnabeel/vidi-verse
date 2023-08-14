import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected!");
  } catch (err) {
    throw err;
  }
};

app.listen("5000", () => {
  connect();
  console.log("Server running successfully on port 5000");
});
