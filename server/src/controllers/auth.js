import User from "../models/user.js";
import { comparePassword, hashPassword } from "../utils/managePassword.js";

/* Sign UP User  */

export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, gender } = req.body;
    if (!fullName || !userName || !password || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    //check if user already exist
    const user = await User.findOne({ userName });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exist" });
    }
    //hash password
    const hashedPassword = await hashPassword(password);
    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    //create user
    const newUser = await User.create({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (!newUser) {
      return res
        .status(422)
        .json({ success: false, message: "Failed to sign up" });
    }
    //Send cookie
    const token = await newUser.generateJwtToken();
    const oneDay = 24 * 60 * 60 * 1000;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
    });

    return res
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.userName,
        profilePic: newUser.profilePic,
        gender: newUser.gender,
      });
  } catch (error) {
    console.log("Error in signUp controller ", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Sign In  */

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    //check if user exist
    const user = await User.findOne({ userName });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist" });
    }
    //compare password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    //send cookie
    const token = await user.generateJwtToken();
    const oneDay = 24 * 60 * 60 * 1000;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
    });
    return res
      .status(200)
      .json({ success: true, message: "User logged in successfully" });
  } catch (error) {
    console.log("Error in signIn controller ", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

/* Sign Out  */

export const signOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ success: true, message: "User Signed out successfully" });
  } catch (error) {
    console.log("Error in signOut controller ", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
