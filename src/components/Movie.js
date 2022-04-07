import React, { useEffect, useState } from "react";

import Loader from "./Loader";
import "./movie.css";

const Movie = (props) => {
  return (
    <div className="movie">
      <figure>
        <img src={`${props.image}`} alt={props.title} />
        <figcaption>
          <h2 className="movie__title">{props.fullTitle}</h2>
          <p className="imdb">imdb: {props.imDbRating}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Movie;

// components/Movie.js

// import React from "https://cdn.skypack.dev/react";
// import PropTypes from "https://cdn.skypack.dev/prop-types";

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string,
// };

// // export default Movie;

// // components/Movies.js

// // import React from "https://cdn.skypack.dev/react";
// // import PropTypes from "https://cdn.skypack.dev/prop-types";

// // import Movie from './Movie';

// const Movies = (props) => (
//   <ul className="movies">
//     {props.movies.map((movie) => (
//       <li key={movie.id}>
//         <Movie {...movie} />
//       </li>
//     ))}
//   </ul>
// );

// Movies.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// };

// // export default Movie;

// // components/Search.js
// // import React from "https://cdn.skypack.dev/react";
// // import PropTypes from "https://cdn.skypack.dev/prop-types";

// const Search = (props) => (
//   <form
//     className="search"
//     onInput={(event) => props.onInput(event.target.value)}
//   >
//     <input type="search" value={props.query} placeholder={props.placeholder} />
//   </form>
// );

// Search.propTypes = {
//   query: PropTypes.string.isRequired,
//   onInput: PropTypes.func.isRequired,
//   placeholder: PropTypes.string,
// };

// // export default Search;

// // components/App.js
// // import React from "https://cdn.skypack.dev/react";

// // import Movies from './Movies';
// // import Search from './Search';

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movies: [],
//       query: "",
//     };

//     this.onInput = this.onInput.bind(this);
//   }

//   onInput(query) {
//     this.setState({
//       query,
//     });

//     this.searchMovie(query);
//   }

//   getPopularMovies() {
//     const url = `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           movies: data.results,
//         });
//       });
//   }

//   searchMovie(query) {
//     const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           movies: data.results,
//         });
//       });
//   }

//   componentDidMount() {
//     this.getPopularMovies();
//   }

//   render() {
//     const { movies, query } = this.state;
//     const isSearched = (query) => (item) =>
//       !query || item.title.toLowerCase().includes(query.toLowerCase());

//     return (
//       <div className="app">
//         <Search
//           query={query}
//           onInput={this.onInput}
//           placeholder="Search for Movie Title …"
//         />
//         <Movies movies={movies.filter(isSearched(query))} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
