import React, { useState, useEffect } from "react";
import Card from "../Components/Home/Card";
import { IoIosAddCircleOutline } from "react-icons/io";
import InputData from "../Components/Home/InputData";
import axios from "axios";
const AllTask = () => {
  const [inputDiv, setInputDiv] = useState("hidden");
  const [Data, setData] = useState();
  const [UpdateData, setUpdateData] = useState({ id: "", title: "", desc: "" });
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fatch = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/task/get-all-task",
        {
          headers,
        }
      );
      setData(response.data.data.tasks);
    };
    fatch();
  });

  return (
    <>
      <div>
        <div className=" flex justify-end  px-4 py-2">
          <button onClick={() => setInputDiv("fixed")}>
            <IoIosAddCircleOutline className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
          </button>
        </div>
        {Data && <Card home={"true"} setInputDiv={setInputDiv} data={Data} setUpdateData={setUpdateData} />}
      </div>
      <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} UpdateData={UpdateData} setUpdateData={setUpdateData} />
    </>
  );
};

export default AllTask;
