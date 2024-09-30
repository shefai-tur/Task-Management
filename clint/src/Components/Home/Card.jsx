import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const Card = ({home,setInputDiv}) => {
  const data = [
    {
      titel: "English Speaking",
      desc: "English speaking course or youtube tutorial prectice evry day",
      status:"In Complate"
    },
    {
      titel: "MERN Stack Development",
      desc: "Creative It Instute in dahaka Bangladesh this is best Institute web and app develpment so i am larne Course evry day",
      status:"Complate"
    },
    {
      titel: "Artifical intaliganes ",
      desc: "Creative It Instute in dahaka Bangladesh this is best Institute web and app develpment so i am larne Course evry day",
      status:"In Complate"
    },
    {
      titel: "BSE-In CSE ",
      desc: "Est Delta Univarcity in Chottogram Bangladesh this is best Institute web and app develpment so i am larne Course evry day",
      status:"In Complate"
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-3 p-4 gap-4 ">
        {data.map((item, i) => (
          <div className=" flex flex-col justify-between bg-gray-800 rounded  p-4">
            <div>
              <h3 className=" text-xl font-semibold">{item.titel} </h3>
              <p className=" text-gray-300 my-2">{item.desc} </p>
            </div>
           
            <div className="flex items-center mt-4 w-full">
              <button className={`${item.status === "In Complate"?"bg-red-400 " : "bg-green-800"} p-2 rounded w-3/6`}>{item.status}</button>
              <div className=" w-3/6 text-white p-2  flex justify-around text-2xl font-semibold">
                <button><CiHeart/></button>
                <button><FaEdit/></button>
                <button> < MdDelete/></button>
              </div>
            </div>
          </div>
          
        ))}
        {home === "true" && 
         <button onClick={()=>setInputDiv("fixed")} className=" flex flex-col justify-center items-center bg-gray-800 rounded  p- text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300">
         <IoIosAddCircleOutline className=" text-5xl"/>
          <h3 className=" mt-4 text-2xl">Add Task</h3>
      </button>
        }
        
      </div>
    </>
  );
};

export default Card;
