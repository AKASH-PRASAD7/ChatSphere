import { Router } from "express";
const router = Router();
import { sendMessage } from "../controllers/message.js";
import verifyCookie from "../middleware/verifyCookie.js";

/**
 * Route     /api/message/send
 * Des       Send Message
 * Params    senderId,text
 * Access    Private
 * Method    POST
 */

router.post("/send", verifyCookie, (req, res) => sendMessage(req, res));

router.get("*", (req, res) => {
  try {
    res.status(404).json({ message: "Route doesn't exist" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
