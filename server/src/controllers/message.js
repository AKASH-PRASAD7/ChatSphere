import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import mongoose from "mongoose";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.user._id;

    if (!message) {
      return res
        .status(400)
        .json({ success: false, message: "Message is required" });
    }

    // Check if there's an existing group conversation
    let groupConversation = await Conversation.findOne({
      participants: { $size: 1 },
    });

    if (!groupConversation) {
      // If no existing group conversation, create one
      groupConversation = await Conversation.create({
        participants: [senderId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      message,
    });

    if (newMessage) {
      groupConversation.messages.push(newMessage._id);
      await groupConversation.save();
    }

    res.status(200).json({ success: true, newMessage });
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { conversationId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(conversationId)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid conversationId" });
    }

    // Assuming conversationId is a valid MongoDB ObjectId
    const conversation = await Conversation.findById(
      conversationId.toString()
    ).populate("messages");

    if (!conversation) {
      return res
        .status(404)
        .json({ success: false, message: "Conversation not found" });
    }

    const messages = conversation.messages;

    res.status(200).json({ success: true, messages });
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
