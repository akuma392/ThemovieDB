import React, { useState, useEffect } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import MovieAside from "./MovieAside";

const MovieContent = ({ data }) => {
  const [loadAll, setLoadAll] = useState(false);
  const [actors, SetActors] = useState(data.actorList.slice(0, 5));
  const similars = data.similars.slice(0, 5);
  const handleLoad = () => {
    setLoadAll(true);
  };
  const handleHide = () => {
    setLoadAll(false);
  };
  useEffect(() => {
    if (loadAll) {
      SetActors(data.actorList.slice(0, 15));
    } else {
      SetActors(data.actorList.slice(0, 5));
    }
  }, [loadAll]);
  return (
    <div id="single-movie">
      <div className="container">
        <div className="movie-content-data">
          <section className="single-movie-main">
            <div className="cast-details">
              <h3>Top Billed Cast</h3>
              <ul className="actor-card">
                {actors.map((elm) => {
                  return (
                    <li key={elm.id}>
                      <div className="actor">
                        <figure>
                          <img src={elm.image} />
                          <figcaption>
                            <h2 className="actor__title"> {elm.name}</h2>
                            <p className="imdb">{elm.asCharacter}</p>
                          </figcaption>
                        </figure>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {!loadAll ? (
                <div className="btn">
                  <button onClick={handleLoad}>See more</button>
                </div>
              ) : (
                <div className="btn">
                  <button onClick={handleHide}>Hide details</button>
                </div>
              )}
            </div>
            <Card data={data} />
            <div className="suggested-details">
              <h3>Recommendations</h3>
              <ul className="actor-card">
                {similars.map((elm) => {
                  return (
                    <li key={elm.id}>
                      <Link to={`/movie/${elm.id}`}>
                        <div className="actor">
                          <figure>
                            <img src={elm.image} />
                            <figcaption>
                              <h2 className="actor__title"> {elm.title}</h2>
                              <p className="imdb">imDB: {elm.imDbRating}</p>
                            </figcaption>
                          </figure>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="single-movie-aside">
            <MovieAside data={data} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieContent;

const activeComponent = (state, data) => {
  switch (state) {
    case "plot":
      return <Plot data={data} />;
    case "ratings":
      return <Ratings data={data} />;
    case "trailers":
      return <Trailer data={data} />;

    case "poasters":
      return <Poasters data={data} />;
    default:
      return <Plot data={data} />;
  }
};

const Plot = ({ data }) => {
  return (
    <div>
      <p className="movie-plot">{data.plot}</p>
    </div>
  );
};

const Ratings = ({ data }) => {
  return (
    <div>
      <div className="card-rating">
        <li>
          imDB: <span>{data?.imDbRating}</span>
        </li>
        <li>
          imDbRatingVotes: <span>{data?.imDbRatingVotes}</span>
        </li>
        <li>
          metacritic: <span>{data?.ratings?.metacritic}</span>
        </li>
        <li>
          rottenTomatoes: <span>{data?.ratings?.rottenTomatoes}</span>
        </li>
        <li>
          filmAffinity: <span>{data?.ratings?.filmAffinity}</span>
        </li>
        <li>
          theMovieDb: <span>{data?.ratings?.theMovieDb}</span>
        </li>
      </div>

      <div>
        <p className="card-awards">
          awards:
          <span>{data?.awards}</span>
        </p>
      </div>
    </div>
  );
};

// trailer component
const Trailer = ({ data }) => {
  return (
    <div className="card-trailer">
      <img src={data.trailer.thumbnailUrl} alt={data.trailer.title} />
      <a href={data.trailer.link} target="_blank">
        <i className="fas fa-play"></i>
      </a>
      <div>
        <p>{data.trailer.videoTitle}</p>
        <p>{data.trailer.videoDescription}</p>
      </div>
    </div>
  );
};

// poster component
const Poasters = ({ data }) => {
  return (
    <div className="card-poaster">
      {data?.posters?.posters
        ?.sort(() => 0.5 - Math.random())
        .slice(0, 10)
        .map((elm) => {
          return (
            <li key={elm.id}>
              <img src={elm.link} alt={elm.id} />
            </li>
          );
        })}
    </div>
  );
};

const Card = ({ data }) => {
  const [activeState, SetActiveState] = useState("plot");

  const handleState = (elm) => {
    SetActiveState(elm.toLowerCase());
  };
  const arr = ["Plot", "Ratings", "Trailers", "Poasters"];

  return (
    <>
      <div id="card">
        <ul>
          {arr.map((elm) => {
            return (
              <li
                onClick={() => handleState(elm)}
                className={
                  activeState === elm.toLowerCase() ? "active-elm" : ""
                }
              >
                {elm}
              </li>
            );
          })}
        </ul>
        <div className="plot-card-content">
          {activeComponent(activeState, data)}
        </div>
      </div>
    </>
  );
};
