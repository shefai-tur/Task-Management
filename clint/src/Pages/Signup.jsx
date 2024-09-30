import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 bg-gray-800 rounded">
        <div className=" text-2xl font-semibold">Singup</div>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
        />
        <input
          type="email"
          placeholder="Email"
          name="shefaitur@gmail.com"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
        />
        <div className=" flex justify-between items-center w-full">
        <button className=" bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">
          SignUp
        </button>
        <Link to="/login" className=" text-gray-400 hover:text-gray-200">Alrady having an account? LogIn hear</Link>
        </div>
      
      </div>
    </div>
  );
};

export default Signup;
