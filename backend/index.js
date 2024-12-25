import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import HoldingModel from "./model/HoldingModel.js";
import OrderModel from "./model/OrderModel.js";
import PositionsModel from "./model/PositionsModel.js";
const app = express();
const port = 3000 || process.env.PORT;

import bodyParser from "body-parser";
import cors from "cors";

app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
connectDB();

app.get("/allholdings", async (req, res) => {
  let allholdings = await HoldingModel.find({});
  res.json(allholdings);
});
app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionsModel.find({});
  res.json(allpositions);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new OrderModel({ name, qty, price, mode });
  await newOrder.save();
  res.json(newOrder);
});

app.get("/health", (req, res) => res.json({ message: "Healthy" }));
app.listen(port, () => console.log(`Started on port ${port}!`));
