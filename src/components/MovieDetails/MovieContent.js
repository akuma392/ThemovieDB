import React, { useState, useEffect } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";

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
                      <div className="actor">
                        <figure>
                          <img src={elm.image} />
                          <figcaption>
                            <h2 className="actor__title"> {elm.title}</h2>
                            <p className="imdb">imDB: {elm.imDbRating}</p>
                          </figcaption>
                        </figure>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="single-movie-aside"></section>
        </div>
      </div>
    </div>
  );
};

export default MovieContent;

const activeComponent = (state) => {
  console.log(state, "swicth");
  switch (state) {
    case "plot":
      return <Plot />;
    case "ratings":
      return <Ratings />;
    case "trailers":
      return <Trailer />;

    case "poasters":
      return <Poasters />;
    default:
      return <Plot />;
  }
};

const Plot = ({ data }) => {
  return <div>plot</div>;
};

const Ratings = ({ data }) => {
  return <div>ratings</div>;
};
const Trailer = ({ data }) => {
  return <div>Trailer</div>;
};
const Poasters = ({ data }) => {
  return <div>Poaster</div>;
};

const Card = ({ data }) => {
  const [activeState, SetActiveState] = useState("plot");

  const handleState = (elm) => {
    SetActiveState(elm.toLowerCase());
  };
  const arr = ["Plot", "Ratings", "Trailers", "Poasters"];
  console.log(activeState, "Plot".toLowerCase(), "test");
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
        {activeComponent(activeState)}
      </div>
    </>
  );
};
