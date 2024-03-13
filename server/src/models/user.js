import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import conf from "../config/conf.js";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "FullName is required"],
    },
    userName: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exist"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

//method
userSchema.methods.generateJwtToken = function () {
  try {
    return jwt.sign({ user: this._id.toString() }, conf.JWT_SECRET_KEY);
  } catch (error) {
    return error;
  }
};

const User = mongoose.model("User", userSchema);
export default User;
