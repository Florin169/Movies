import React, { useState, useEffect } from "react";
import ListMovies from "./ListMovies";
import requests from "./requests";
import Banner from "./Banner";
import Info from "./Info";

const App = () => {
  const submitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Banner />
      <ListMovies
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <ListMovies title="Movies" fetchURL={requests.fetchMovies} />
      <Info fetchURL={requests.fetchMovies} />
      <ListMovies title="TV Series" fetchURL={requests.fetchTv} />
      <ListMovies title="Trending" fetchURL={requests.fetchtrending} />
      <ListMovies title="Horror" fetchURL={requests.fetchHorror} />
    </section>
  );
};

export default App;
