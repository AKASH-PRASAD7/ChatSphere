import React from "react";
import MessageContainer from "./MessageContainer";
import LogoutBtn from "./LogoutBtn";
const index = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center min-h-screen">
          <div className=" p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <div className="flex flex-col items-center gap-2 justify-between ">
              <div className="flex justify-between items-center gap-2">
                <img src="/logo.png" alt="logo" className="w-12" />
                <p className="text-white text-3xl font-semibold">
                  {" "}
                  Chat Sphere
                </p>
                <LogoutBtn />
              </div>
              <MessageContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
