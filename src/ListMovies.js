import axios from "axios";
import React, { useState, useEffect } from "react";
import fetch from "./UseFetchData";

const ListMovies = ({ title, fetchURL, isLargeRow }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setList(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <section>
      <div className="row">
        <h1>{title}</h1>
        <div className={`container ${isLargeRow && "containerLarge"}`}>
          {list
            ? list.map((movie) => {
                return (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    key={movie.id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
};

export default ListMovies;
