import React, { useEffect } from "react";
import Home from "./Pages/Home";
import AllTask from "./Pages/AllTask";
import ComplateTask from "./Pages/ComplateTask";
import ImportentTask from "./Pages/ImportentTask";
import IncomplateTask from "./Pages/IncomplateTask";
import {Router, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
const App = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch()
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  useEffect(() => {
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login())
    }else if (isLoggedin === false) {
      navigate("/signup");
    }
  }, []);

  return (
    <div className=" bg-gray-900  text-white h-screen p-2 relative ">
    
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<AllTask />} />
          <Route path="/complatetask" element={<ComplateTask />} />
          <Route path="/importentTask" element={<ImportentTask />} />
          <Route path="/incomplatetask" element={<IncomplateTask />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </div>
  );
};

export default App;
