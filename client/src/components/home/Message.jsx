import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const time = extractTime(message.createdAt);
  const fromMe = message.senderId?._id === authUser.id;
  const chatClassName = fromMe ? "justify-end" : "justify-start"; // Dynamically set justify content
  const profilePic = fromMe
    ? authUser?.profilePic
    : message.senderId?.profilePic;
  const name = fromMe ? "You" : message.senderId?.userName;

  return (
    <>
      <section className="text-white px-4">
        <div className={`flex ${chatClassName}   mb-4`}>
          <img
            src={profilePic}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base mr-1">{name}</span>
            <div
              className={`${
                fromMe ? "bg-black" : "bg-lime-500"
              } text-white p-1 rounded-lg max-w-xs`}
            >
              <p className="text-sm">{message.message}</p>
            </div>

            <span className="text-xs text-slate-600">{time}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
