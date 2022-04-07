import React, { useEffect, useState } from "react";
import { url } from "../utils/utils";
import Loader from "./Loader";
import Movie from "./Movie";
import { popularMovies } from "./popularMovies";

const Movies = (props) => {
  const [movies, setMovies] = useState(null);
  const [data, setData] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  // useEffect(() => {
  //   fetch("https://imdb-api.com/en/API/MostPopularMovies/k_emd6dwx0")
  //     .then((data) => data.json())
  //     .then((data) => setMovies(data));
  // }, []);

  useEffect(() => {
    setMovies(popularMovies);
  }, []);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  useEffect(() => {
    setData(movies?.items.slice(0, 50));
  }, [movies]);

  useEffect(() => {
    setData(movies?.items);
  }, [loadMore]);

  if (!movies) {
    return (
      <>
        <Loader />
      </>
    );
  }
  console.log(data, "load more");
  return (
    <div id="movie-list">
      <h4>Popular Movies</h4>
      <div className="container">
        <ul className="movies">
          {data &&
            data?.map((movie) => (
              <li key={movie.id}>
                <Movie {...movie} />
              </li>
            ))}
        </ul>
        {!loadMore && (
          <div className="load-more" onClick={handleLoadMore}>
            Load more
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
