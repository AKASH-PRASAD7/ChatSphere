import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;

    if (!message) {
      return res
        .status(400)
        .json({ success: false, message: "Message is required" });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await conversation.save();

    res.status(200).json({ success: true, newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
