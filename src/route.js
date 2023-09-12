import { Router } from "express";
import { createUser, updateUser, getUser, deleteUser } from "./user.js";
const userRouter = Router();
userRouter
  .post("/", createUser)
  .patch("/:user_id", updateUser)
  .get("/:user_id", getUser)
  .delete("/:user_id", deleteUser);
export default userRouter;
