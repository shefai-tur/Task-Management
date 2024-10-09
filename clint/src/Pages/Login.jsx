import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  if (isLoggedin === true) {
    navigate("/")}

  const [data, setData] = useState({ username: "", password: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const submit = async () => {
    try {
      if (data.username === "" || data.password === "") {
        alert("All fild are requerd");
      } else {
        const response = await axios.post(
          "http://localhost:8000/api/v1/auth/login",
          data
        );
        console.log(response);
        setData({ username: "", password: "" });
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token",response.data.token);
        dispatch(authActions.login());
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 bg-gray-800 rounded">
        <div className=" text-2xl font-semibold">Login</div>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
          onChange={change}
          value={data.username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
          onChange={change}
          value={data.password}
        />
        <div className="flex justify-between items-center w-full">
          <button
            onClick={submit}
            className=" bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded"
          >
            LogIn
          </button>
          <Link to="/signup" className="text-gray-400 hover:text-gray-200">
            Not having an account? SignUp hear
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
