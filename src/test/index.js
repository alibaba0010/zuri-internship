import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import app from "../app.js";
// import { Types, connect, connection } from "mongoose";
import mongoose from "mongoose";
// declare global {
//   namespace NodeJS {
//     interface Global {
//       signin(): Promise<string[]>; //aditional property
//     }
//   }
// }
let mongo;
beforeAll(async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  mongo = await MongoMemoryServer.create();

  await mongoose.connect(mongo.getUri(), { dbName: "test-db" });
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
