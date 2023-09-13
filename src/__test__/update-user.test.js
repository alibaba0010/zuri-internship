import request from "supertest";
import app from "../app.js";
import User from "../mongo.js";
import pkg from "mongoose";
const { Types } = pkg;

// Create a user
const newUser = async () => {
  const user = User.create({
    id: new Types.ObjectId().toHexString(),
    name: "Edwin",
    password: "password",
  });

  return user;
};
// UPDATE USER

it("returns a 400 on emmpty field", async () => {
  const user = await newUser();

  return request(app).patch(`/api/${user.id}`).send().expect(400);
});

it("returns a 400 on invalid field", async () => {
  const user = await newUser();
  return request(app)
    .patch(`/api/${user.id}`)
    .send({
      name: 200,
    })
    .expect(400);
});

it("returns a 200 on successful user update", async () => {
  const user = await newUser();

  // Update user
  //   const newUsers = await User.findByIdAndUpdate(user.id, { name: "Paul" });
  const { body: res } = await request(app)
    .patch(`/api/${user.id}`)
    .send({
      name: "Paul",
    })
    .expect(200);
  expect(res.user).toEqual("Paul");
});
