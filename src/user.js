import User from "./mongo.js";
export const createUser = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) throw new Error("Please provide name and password");
  const user = await User.create({ name, password });
  res.status(201).json({ user: user.name });
};
export const updateUser = async (req, res) => {
  const { name } = req.body;
  const { user_id } = req.params;
  if (!name) throw new Error("Please provide name");
  const user = await User.findById(user_id);
  user.name = name;
  const updateUser = await user.save();
  res.status(200).json({ user: updateUser.name });
};
export const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findById(user_id);
  if (!user) throw new Error("User not found");
  await user.remove();
  res.status(200).json({ message: "User deleted" });
};
export const getUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findById(user_id);
  if (!user) throw new Error("User not found");
  res.status(200).json({ user: user.name });
};
