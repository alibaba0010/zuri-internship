import request from "supertest";
import app from "../app.js";
import User from "../mongo.js";
import pkg from "mongoose";
const { Types } = pkg;

// GET USER WITH ID
it("returns a 200 on successful user register", async () => {
  // Create a user
  const user = await User.create({
    id: new Types.ObjectId().toHexString(),
    name: "Edwin",
    password: "password",
  });
  const { body: fetchedUser } = await request(app)
    .get(`/api/${user.id}`)
    .send()
    .expect(200);
  expect(fetchedUser.user).toEqual(user.name);
});
it("returns a 400 on user not found", async () => {
  const id = new Types.ObjectId().toHexString();
  await User.findById(id);
  return request(app).get(`/api/${id}`).send().expect(400);
});

// DELETE USER WITH ID
it("returns a 200 on successful user delete", async () => {
  // Create a user
  const user = await User.create({
    id: new Types.ObjectId().toHexString(),
    name: "Edwin",
    password: "password",
  });
  const deleteUser = await request(app)
    .delete(`/api/${user.id}`)
    .send()
    .expect(200);
  const fetchUser = await User.findById(user.id);
  expect(fetchUser).toEqual(null);
});
it("returns a 400 on user not found", async () => {
  const id = new Types.ObjectId().toHexString();
  await User.findById(id);
  return request(app).delete(`/api/${id}`).send().expect(400);
});
