import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidbar = () => {
  const data = [
    { titel: "All task", icon: <CgNotes /> ,link:"/"},

    { titel: "Importent task", icon: <MdLabelImportant /> ,link:"/importenttask"},
    { titel: "Complate task", icon: <FaCheckDouble /> ,link:"/complatetask"},
    { titel: "Incomplate task", icon: <TbNotebookOff />,link:"/incomplatetask"},
  ];
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">Shefaitur Rahman</h1>
        <h4 className="mb-1 text-gray-400">shefaitur@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          
          <Link to={items.link} key={i} className="my-2 flex gap-2 items-center hover:bg-gray-500 p-2 transition-all decoration-slate-300 ">{items.icon}{items.titel} </Link>
        ))}
      </div>
      <div>
        {" "}
        <button className="  bg-gray-600 p-2 w-full ">Logout</button>
      </div>
    </>
  );
};

export default Sidbar;
