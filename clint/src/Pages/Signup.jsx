import React, {useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { useSelector } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  if (isLoggedin === true) {
    navigate("/")}

  const [data, setData] = useState({ username: "", email: "", password: "" });
  const change =(e)=>{
    const {name,value}=e.target
    setData({...data,[name]:value})
  }

  const submit = async()=>{
  try {
    if(data.username === ""|| data.email===""|| data.password===""){
      alert("All Filds are requerd")
    }else{
     const response = await axios.post("http://localhost:8000/api/v1/auth/sign-in",data)
     setData({ username: "", email: "", password: "" })
     alert(response.data.message)
     navigate("/login")
    }
  } catch (error) {
    alert(error.response.data.message)
  }
  }



  return (
    <div className=" h-[98vh] flex items-center justify-center">
      <div className="p-4 w-2/6 bg-gray-800 rounded">
        <div className=" text-2xl font-semibold">Singup</div>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
          onChange={change}
          value={data.username}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
          required
          onChange={change}
          value={data.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className=" bg-gray-700 py-2 px-3 my-3 w-full rounded"
          onChange={change}
          value={data.password}
        />
        <div className=" flex justify-between items-center w-full">
          <button  onClick={submit} className=" bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded">
            SignUp
          </button>
          <Link to="/login" className=" text-gray-400 hover:text-gray-200">
            Alrady having an account? LogIn hear
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
