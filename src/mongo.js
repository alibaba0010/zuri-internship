import pkg, { Types } from "mongoose";
const { Schema, model } = pkg;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide name"],
  },
  passwors: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "Password must be up to 6 characters"],
  },
});

export default model("User", UserSchema);
