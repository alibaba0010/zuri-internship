import request from "supertest";
import app from "./app.js";
it("returns a 201 on successful user register", async () => {
  return request(app)
    .post("/api")
    .send({
      name: "test",
      password: "password",
    })
    .expect(201);
});
