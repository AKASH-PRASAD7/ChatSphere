import React, { useEffect, useRef } from "react";
import Message from "./Message";
import getMessages from "../../hooks/useGetMessage";
import LoadingMessage from "../LoadingMessage";
import useListenMessages from "../../hooks/useListenMessages";

const Messges = () => {
  useListenMessages();
  const { messages, loading } = getMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <>
      <div className="px-4 flex-1 max-h-[60vh] overflow-y-auto">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message key={message._id} message={message} />
            </div>
          ))}
        {loading && <LoadingMessage />}
        {!loading && messages.length === 0 && (
          <p className="text-center text-white font-semibold">
            Start Chatting 🚀🚀🚀
          </p>
        )}
      </div>
    </>
  );
};

export default Messges;
