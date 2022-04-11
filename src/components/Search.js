import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { url, find_movie, key1, key2 } from "../utils/utils";
import Loader from "./Loader";
import Movie from "./Movie";

const Search = ({ arr }) => {
  const [results, setResults] = useState(null);
  const [value, setValue] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (results) {
      setLoading(true);
      if (localValue?.expression === results) {
        setData(localValue);
      } else {
        fetch(`https://imdb-api.com/en/API/Search/${key2}/` + `${results}`)
          .then((data) => data.json())
          .then((data) => setData(data));
      }
    }
    setLoading(false);
  }, [results]);

  const localValue = arr.find(
    (elm) => elm?.expression?.toLowerCase() === results?.toLowerCase()
  );

  console.log(localValue, "testtttttttttttttttttttttttt");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKey = (e) => {
    if (e.keyCode === 13) {
      setResults(value);
      setValue("");
    }
  };

  useEffect(() => {
    if (results) {
      localStorage.setItem(results, JSON.stringify(data));
    }
  }, [data]);

  return (
    <div className="search-elm">
      <div className="container">
        <div className="search-inp">
          <h2>Search Movies</h2>
          <input
            type="text"
            placeholder="search movie"
            onKeyUp={handleKey}
            onChange={handleChange}
            value={value}
          />
        </div>
        <ul className="quick-links">
          <li>Top rated movies</li>
          <Link to="/movies">
            <li>Top popular movies</li>
          </Link>
          <li>Popular TV shows</li>
        </ul>

        {results && data && (
          <ul className="movies">
            {data &&
              data?.results.map((movie) => (
                <li key={movie.id}>
                  <SearchMovie {...movie} />
                </li>
              ))}
          </ul>
        )}
        {results && !data && <Loader />}
      </div>
    </div>
  );
};

export default Search;

const SearchMovie = (props) => {
  return (
    <div className="movie">
      <Link to={`/movie/${props.id}`}>
        <figure>
          <img src={`${props.image}`} alt={props.title} />
          <figcaption>
            <h2 className="movie__title">
              {props.title} {props.description}
            </h2>
          </figcaption>
        </figure>
      </Link>
    </div>
  );
};
