import User from "../models/user.js";
import jwt from "jsonwebtoken";
import conf from "../config/conf.js";

const verifyCookie = async (req, res, next) => {
  try {
    const cookie = req.cookies["token"];

    if (!cookie) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Please Sign In" });
    }
    const token = jwt.verify(cookie, "dsf4tq3gfsadaga@$$r32rwefdasfweadf3W");

    if (!token) {
      return res.status(401).json({ error: "Unauthorized Invalid Token" });
    }
    const user = await User.findById(token.user).select("-password");
    if (user) {
      req.user = user;
      next();
    } else {
      return res
        .status(404)
        .json({ success: false, error: "User does not exist" });
    }
  } catch (error) {
    console.log("Error in verifyCookie middleware: ", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export default verifyCookie;
