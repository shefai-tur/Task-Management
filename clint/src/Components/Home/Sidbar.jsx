import React, { useEffect,useState } from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import axios from "axios";
const Sidbar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [Data, setData] = useState();
  const data = [
    { titel: "All task", icon: <CgNotes />, link: "/" },

    {
      titel: "Importent task",
      icon: <MdLabelImportant />,
      link: "/importentTask",
    },
    { titel: "Complate task", icon: <FaCheckDouble />, link: "/complatetask" },
    {
      titel: "Incomplate task",
      icon: <TbNotebookOff />,
      link: "/incomplatetask",
    },
  ];

  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear("id");
    localStorage.clear("token");
    alert("Logout Succes fully");
    navigate("/signup");
  };
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
      setData(response.data.data);
    };
    fatch();
  }, []);

  return (
    <>
      {Data && (
        <div>
          <h1 className="text-xl font-semibold">{Data.username}</h1>
          <h4 className="mb-1 text-gray-400">{Data.email}</h4>
          <hr />
        </div>
      )}
      <div>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="my-2 flex gap-2 items-center hover:bg-gray-500 p-2 transition-all decoration-slate-300 "
          >
            {items.icon}
            {items.titel}{" "}
          </Link>
        ))}
      </div>
      <div>
        {" "}
        <button onClick={logout} className="  bg-gray-600 p-2 w-full ">
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidbar;
