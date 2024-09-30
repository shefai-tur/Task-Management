import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const InputData = ({inputDiv,setInputDiv}) => {
  return (
    <>
      <div className={`${inputDiv}  top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
      <div className={`${inputDiv}  top-0 left-0  h-screen w-full flex justify-center items-center`}>
        <div className=" p-4 w-2/6 bg-gray-900 rounded">
          <div className="flex justify-end ">
            <button onClick={()=>setInputDiv("hidden")} className="text-2xl">
              {" "}
              <IoIosCloseCircleOutline />{" "}
            </button>
          </div>
          <input
            type="text"
            placeholder="Titel"
            name="titel"
            className="my-3 bg-gray-700 px-3 py-2 rounded w-full"
          />
          <textarea
            cols="30"
            rows="10"
            type="text"
            placeholder="Description"
            name="desc"
            className="my-3 bg-gray-700 px-3 py-2 rounded w-full"
          ></textarea>
          <button className="px-3 py-2 bg-blue-400 rounded text-black font-semibold text-xl">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
