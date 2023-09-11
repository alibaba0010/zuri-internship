import { Router } from "express";
import { createUser, updateUser, getUser, deleteUser } from "./user.js";
const userRouter = Router();
userRouter
  .post("/", createUser)
  .patch("/:id", updateUser)
  .get("/:id", getUser)
  .delete("/:id", deleteUser);
export default userRouter;
