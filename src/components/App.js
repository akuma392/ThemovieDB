import React, { useState, useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Categories from "./Categories";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home/Home";
import Movies from "./Movies";
import Search from "./Search";
import MovieDetails from "./MovieDetails/MovieDetails";
import { key1, key2, allStorage } from "../utils/utils";

function App() {
  const [popularsMovies, setPopularsMovies] = useState(null);
  const [inCinemaHall, setInCinemaHall] = useState(null);

  let movie_data = localStorage.getItem("movie_data");

  let searchLocalData = allStorage().map((elm) => JSON.parse(elm));

  console.log(searchLocalData, "parse data");

  let storage_data = {
    popular_movies: popularsMovies,
    in_cinemaHall: inCinemaHall,
  };

  useEffect(() => {
    if (!movie_data) {
      fetch(`https://imdb-api.com/en/API/ComingSoon/${key2}`)
        .then((data) => data.json())
        .then((data) => setInCinemaHall(data));

      fetch(`https://imdb-api.com/en/API/MostPopularMovies/${key2}`)
        .then((data) => data.json())
        .then((data) => setPopularsMovies(data));
    } else {
      let { popular_movies, in_cinemaHall } = JSON.parse(
        localStorage.getItem("movie_data")
      );
      setPopularsMovies(popular_movies);
      setInCinemaHall(in_cinemaHall);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movie_data", JSON.stringify(storage_data));
  }, [popularsMovies, inCinemaHall]);

  // useEffect(() => {
  //   localStorage.setItem("popular", JSON.stringify(popularsMovies?.items));
  // }, [popularsMovies]);
  // useEffect(() => {
  //   localStorage.setItem("cinema_hall", JSON.stringify(inCinemaHall?.items));
  // }, [inCinemaHall]);

  // useEffect(() => {
  //   fetch("https://imdb-api.com/en/API/ComingSoon/k_emd6dwx0")
  //     .then((data) => data.json())
  //     .then((data) => setInCinemaHall(data));
  // }, [popularMovies]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categories"
          element={<Movies movieData={inCinemaHall} />}
        />
        <Route path="/Movies" element={<Movies movieData={popularsMovies} />} />
        <Route path="/search" element={<Search arr={searchLocalData} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* <Route path="/categories">
        <Categories />
      </Route>
      <Route path="/Movies">
        <Movies />
      </Route>
      <Route path="/search">
        <Search />
      </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
