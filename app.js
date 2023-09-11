import dotenv from "dotenv";
import express, { json } from "express";

import connectDB from "./db.js";
import userRouter from "./route.js";

const app = express();

app.use(json()).use("/api", userRouter);
dotenv.config();
(async () => {
  await connectDB(uri);
  app.listen(PORT, () =>
    console.log(`Listening to port @ http://localhost:${PORT}`)
  );
})();

app;
