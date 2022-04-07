import React from "react";

const MovieHero = ({ data }) => {
  const actorList = (starList) => {
    let star = starList.slice(0, 2);
    return star.reduce((acc, cv) => {
      acc = acc + cv.name + " ";
      return acc;
    }, "");
  };

  let { image } = data;
  const style = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "60vh",

    backgroundImage: `linear-gradient(to bottom right, rgba(52.5, 73.5, 115.5, 1), rgba(52.5, 73.5, 115.5, 0.84)), url(${image})`,
  };
  return (
    <>
      <section style={style} className="movie-hero">
        <div className="poster">
          <img src={image} alt="123" />
        </div>
        <article className="movie-content">
          <h1>{data.fullTitle}</h1>
          <p className="movie-detail">
            <span>{data.releaseDate}</span>
            <span>.</span>
            <span>{data.genres}</span> <span>.</span>
            <span>{data.runtimeStr}</span>
          </p>

          <div className="extra-details">
            <div className="imdb">
              <p>
                imDB: <span>{data.ratings.imDb}</span>
              </p>
            </div>
            <div className="play-trailer">
              <a href={data.trailer.link} target="_blank">
                <i className="fas fa-play"></i>
                <p>Play trailer</p>
              </a>
            </div>
          </div>
          <p className="tagline">
            <i>{data.tagline}</i>
          </p>
          <p className="overview">Overview:</p>
          <p>{data.plot.slice(0, 500) + "........"}</p>
          <div className="read-more">
            <button>Read more</button>
          </div>
          <div className="cast">
            <div>
              <p>Director</p>
              <h5>{data.directors}</h5>
            </div>
            <div>
              <p>Writers</p>
              <h5>{data.writers}</h5>
            </div>
            <div>
              <p>Star</p>
              <h5>{actorList(data.starList)}</h5>
            </div>
            <div>
              <p>countries</p>
              <h5>{data.countries}</h5>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default MovieHero;
