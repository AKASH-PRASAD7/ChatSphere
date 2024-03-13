import React from "react";

const Message = () => {
  return (
    <>
      <section className="text-white">
        <div className="flex  mb-4">
          <img
            src="/logo.png"
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold text-base mr-1">Jhon cena</span>
            <div className="bg-blue-500 text-white p-1 rounded-lg max-w-xs">
              <p className="text-sm">hello world</p>
            </div>

            <span className="text-xs text-slate-600">12:00</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
