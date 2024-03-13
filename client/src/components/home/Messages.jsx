import React from "react";
import Message from "./Message";

const Messges = () => {
  return (
    <>
      <div className="px-4 flex-1 max-h-[60vh] overflow-y-auto">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </>
  );
};

export default Messges;
