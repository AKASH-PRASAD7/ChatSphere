import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors("");
    try {
      console.log(inputs);
    } catch (error) {
      console.log(error);
      setErrors(error.message);
    } finally {
      setLoading(false);
      setInputs({
        username: "",
        password: "",
      });
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
            {errors && (
              <p className="bg-red-500 text-white rounded-xl p-1 text-sm mt-2">
                {errors}
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-white">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full input rounded-xl p-2 bg-black text-white h-10"
                value={inputs.username}
                required
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>

            <div>
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
                required
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
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
