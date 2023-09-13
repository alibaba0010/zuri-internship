import User from "./mongo.js";
export const createUser = async (req, res) => {
  const { name, password } = req.body;
  try {
    if (!name) res.status(400).json({ message: "Please provide name" });
    if (typeof name !== "string")
      res.status(400).json({ message: "Provide a string value" });
    const user = await User.create({ name, password });
    res.status(201).json({ user: { name: user.name, id: user.id } });
  } catch (error) {}
};
export const updateUser = async (req, res) => {
  const { name } = req.body;
  const { user_id } = req.params;
  try {
    if (!name) res.status(400).json({ message: "Please provide name" });
    if (typeof name !== "string")
      res.status(400).json({ message: "Provide a string value" });
    const user = await User.findById(user_id);
    user.name = name;
    const updateUser = await user.save();
    res.status(200).json({ user: updateUser.name });
  } catch (error) {}
};
export const deleteUser = async (req, res) => {
  const { user_id } = req.params;
  const user = await User.findById(user_id);
  try {
    if (!user) res.status(400).json({ message: "User not found" });
    await user.deleteOne();
    res.status(200).json({ message: "User deleted" });
  } catch (error) {}
};
export const getUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await User.findById(user_id);

    if (!user) res.status(400).json({ message: "User not found" });
    res.status(200).json({ user: user.name });
  } catch (error) {}
};
