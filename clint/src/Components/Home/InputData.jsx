import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const InputData = ({ inputDiv, setInputDiv, UpdateData, setUpdateData }) => {
  const [Data, setData] = useState({ title: "", desc: "" });
  useEffect(() => {
    setData({ title: UpdateData.title, desc: UpdateData.desc });
  }, [UpdateData]);

  let change = async (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  let handelSubmint = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("All Filds are Requard");
    } else {
      await axios.post("http://localhost:8000/api/v1/task/create-task", Data, {
        headers,
      });
      setData({ title: "", desc: "" });
      setInputDiv("hidden");
    }
  };
  const handelUpdate = async () => {
    if (Data.title === "" || Data.desc === "") {
      alert("All Filds are Requard");
    } else {
      await axios.put(
        `http://localhost:8000/api/v1/task/update-task/${UpdateData.id}`,
        Data,
        {
          headers,
        }
      );
      setUpdateData({ id: "", title: "", desc: "" });
      setData({ title: "", desc: "" });
      setInputDiv("hidden");
    }
  };
  return (
    <>
      <div
        className={`${inputDiv}  top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>
      <div
        className={`${inputDiv}  top-0 left-0  h-screen w-full flex justify-center items-center`}
      >
        <div className=" p-4 w-2/6 bg-gray-900 rounded">
          <div className="flex justify-end ">
            <button
              onClick={() => {
                setInputDiv("hidden");
                setData({ title: "", desc: "" });
                setUpdateData({ id: "", title: "", desc: "" });
              }}
              className="text-2xl"
            >
              {" "}
              <IoIosCloseCircleOutline />{" "}
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="my-3 bg-gray-700 px-3 py-2 rounded w-full"
            onChange={change}
            value={Data.title}
          />
          <textarea
            cols="30"
            rows="10"
            type="text"
            placeholder="Description"
            name="desc"
            className="my-3 bg-gray-700 px-3 py-2 rounded w-full"
            onChange={change}
            value={Data.desc}
          ></textarea>
          {UpdateData.id === "" ? (
            <button
              onClick={handelSubmint}
              className="px-3 py-2 bg-blue-400 rounded text-black font-semibold text-xl"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handelUpdate}
              className="px-3 py-2 bg-blue-400 rounded text-black font-semibold text-xl"
            >
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default InputData;
