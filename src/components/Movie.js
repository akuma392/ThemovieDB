import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from "./Loader";
import "./movie.css";

const Movie = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="movie">
          <figure>
            <img src={`${props.image}`} alt={props.title} />
            <figcaption>
              <h2 className="movie__title">{props.fullTitle}</h2>
              <p className="imdb">imdb: {props.imDbRating}</p>
            </figcaption>
          </figure>
        </div>
      </Link>
    </>
  );
};

export default Movie;
