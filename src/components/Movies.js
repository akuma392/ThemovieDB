import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import Movie from "./Movie";

const Movies = ({ movieData }) => {
  const [movies, setMovies] = useState(null);
  const [data, setData] = useState(null);
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  useEffect(() => {
    setData(movieData?.items.slice(0, 50));
  }, [movieData]);

  useEffect(() => {
    setData(movieData?.items);
  }, [loadMore]);

  if (!movieData) {
    return (
      <>
        <Loader />
      </>
    );
  }

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
