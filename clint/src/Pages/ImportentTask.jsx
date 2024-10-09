import React, { useEffect, useState } from "react";
import Card from "../Components/Home/Card";
import axios from "axios";

const ImportentTask = () => {
  const [Data, setData] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fatch = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/task/get-importent-task",
        {
          headers,
        }
      );
      setData(response.data.data);
    };
    fatch();
  });

  return <div>{Data && <Card home={"false"} data={Data} />}</div>;
};

export default ImportentTask;
