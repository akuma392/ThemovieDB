import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader";
import { data } from "./mockData";
import "./moviedetails.css";
import MovieHero from "./MovieHero";
import MovieContent from "./MovieContent";

const MovieDetails = (props) => {
  const [state, setState] = useState(null);
  let { id } = useParams();

  // useEffect(() => {
  //   fetch(
  //     `https://imdb-api.com/en/API/Title/k_emd6dwx0/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia,`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => setState(data));
  // }, []);

  useEffect(() => {
    setState(data);
  }, []);
  if (!state) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <MovieHero data={state} />
      <MovieContent data={state} />
    </>
  );
};

export default MovieDetails;
