import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import axios from "axios";

const Card = ({ home, setInputDiv, data, setUpdateData }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const handelComplateTask = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/v1/task/update-complate-task/${id}`,
        {},
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handelImportent = async (id) => {
    try {
      await axios.put(
        `http://localhost:8000/api/v1/task/update-imp-task/${id}`,
        {},
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const hanldeDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v1/task/delete-task/${id}`,
        {},
        { headers }
      );
      alert(response.data.massage);
    } catch (error) {
      console.log(error);
    }
  };
  let handelUpdate = (id, title, desc) => {
    setInputDiv("fixed");
    setUpdateData({ id: id, title: title, desc: desc });
  };

  return (
    <>
    
      <div className="  grid grid-cols-3 p-4 gap-4 ">
        {data.map((item, i) => (
          <div className=" flex flex-col justify-between bg-gray-800 rounded  p-4">
            <div>
              <h3 className=" text-xl font-semibold">{item.title} </h3>
              <p className=" text-gray-300 my-2">{item.desc} </p>
            </div>

            <div className="flex items-center mt-4 w-full">
              <button
                className={`${
                  item.complate === false ? "bg-red-400 " : "bg-green-800"
                } p-2 rounded w-3/6`}
                onClick={() => handelComplateTask(item._id)}
              >
                {item.complate == true ? "Complate " : "In Complate"}
              </button>
              <div className=" w-3/6 text-white p-2  flex justify-around text-2xl font-semibold">
                <button onClick={() => handelImportent(item._id)}>
                  {item.importent == false ? (
                    <CiHeart />
                  ) : (
                    <FaHeart className=" text-red-500" />
                  )}
                </button>
                {home !== "false" && (
                  <button
                    onClick={() =>
                      handelUpdate(item._id, item.title, item.desc)
                    }
                  >
                    <FaEdit />
                  </button>
                )}

                <button onClick={() => hanldeDelete(item._id)}>
                  {" "}
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
        {home === "true" && (
          <button
            onClick={() => setInputDiv("fixed")}
            className=" flex flex-col justify-center items-center bg-gray-800 rounded  p-10 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
          >
            <IoIosAddCircleOutline className=" text-5xl" />
            <h3 className=" mt-4 text-2xl">Add Task</h3>
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
