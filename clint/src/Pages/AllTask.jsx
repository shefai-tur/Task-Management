import React, { useState } from "react";
import Card from "../Components/Home/Card";
import { IoIosAddCircleOutline } from "react-icons/io";
import InputData from "../Components/Home/InputData";

const AllTask = () => {
  const [inputDiv,setInputDiv] = useState("hidden")
  return (
    <>
    <div>
      <div className=" flex justify-end  px-4 py-2">
        <button onClick={()=>setInputDiv("fixed")}>
          <IoIosAddCircleOutline className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
        </button>
      </div>
      <Card home={"true"} setInputDiv={setInputDiv} />
     
    </div>
     <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>
    </>
    
  );
};

export default AllTask;
