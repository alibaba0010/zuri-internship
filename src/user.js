import User from "./mongo.js";
export const createUser = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) throw new Error("Please provide name and password");
  const user = await User.create({ name, password });
  res.status(201).json({ user: user.name });
};
export const updateUser = async (req, res) => {
  const { username } = req.body;
  const { user_id } = req.params;
};
export const deleteUser = async (req, res) => {};
export const getUser = async (req, res) => {};
