import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <>
      <div className="md:min-w-[450px] bg-slate-900 mt-4 rounded-xl p-2 flex flex-col">
        <>
          <Messages />
          <MessageInput />
        </>
      </div>
    </>
  );
};

export default MessageContainer;
