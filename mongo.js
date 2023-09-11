import pkg, { Types } from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide name"],
  },
});

export default model("User", UserSchema);
