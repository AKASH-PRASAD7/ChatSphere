import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignin from "../hooks/useSignin";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
  });

  const { loading, signIn } = useSignin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(inputs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className=" p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-between items-center gap-2">
              <img src="/logo.png" alt="logo" className="w-12" />
              <p className="text-white text-3xl font-semibold"> Chat Sphere</p>
            </div>
            <h1 className="text-xl font-semibold text-center text-gray-300">
              Sign In
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <label className="label p-2 ">
                <span className="text-base label-text text-white">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full input rounded-xl p-2 bg-black text-white h-10"
                value={inputs.userName}
                onChange={(e) =>
                  setInputs({ ...inputs, userName: e.target.value })
                }
              />
            </div>

            <div className="mt-2">
              <label className="label">
                <span className="text-base label-text text-white">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input rounded-xl p-2 bg-black text-white h-10"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <Link
              to={"/signup"}
              className="text-sm hover:underline hover:text-white mt-2 inline-block"
            >
              {"Don't"} have an account?
            </Link>

            <div className="flex items-center justify-center">
              <button
                className="btn btn-block btn-sm mt-2 border border-slate-700 rounded-xl p-2 bg-lime-500 hover:bg-lime-600"
                disabled={loading}
              >
                {loading ? <div className="spinner"></div> : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
