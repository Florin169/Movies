import React, { useState, useEffect } from "react";
import axios from "axios";
import fetch from "./UseFetchData";

const Info = ({ fetchURL }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setList(response?.data.results);
      console.log("INFO", list);
    }
    fetchData();
  }, [fetchURL]);

  return (
    <section>
      {list.map((info, indexInfo) => {
        return <h1>{info.title}</h1>;
      })}
    </section>
  );
};

export default Info;
