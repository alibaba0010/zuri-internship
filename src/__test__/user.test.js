import request from "supertest";
import app from "../app.js";

it("returns a 400 on invalid field", async () => {
  return request(app)
    .post("/api")
    .send({
      name: 200,
      password: "password",
    })
    .expect(400);
});
it("returns a 400 on emmpty field", async () => {
  return request(app)
    .post("/api")
    .send({
      password: "password",
    })
    .expect(400);
});

it("returns a 201 on successful user register", async () => {
  return request(app)
    .post("/api")
    .send({
      name: "test",
      password: "password",
    })
    .expect(201);
});
