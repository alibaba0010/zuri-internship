import dotenv from "dotenv";
import express, { json } from "express";

import connectDB from "./db.js";
import userRouter from "./route.js";
dotenv.config();

const app = express();
const uri = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(json()).use("/api", userRouter);

export default app;
