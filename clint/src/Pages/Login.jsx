import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 bg-gray-800 rounded">
        <div className=" text-2xl font-semibold">Login</div>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
        />
        <div className="flex justify-between items-center w-full">
        <button className=" bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">
          LogIn
        </button>
        <Link to="/signup" className="text-gray-400 hover:text-gray-200">Not having an account? SignUp hear</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
