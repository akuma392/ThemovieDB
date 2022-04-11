import React from "react";

const MovieAside = ({ data }) => {
  return (
    <div className="movie-aside">
      <p className="wiki">
        <a href={data?.wikipedia?.url} target="_blank">
          <i class="fa fa-wikipedia-w" aria-hidden="true"></i>
        </a>
      </p>
      <li>
        <p> Year:</p>
        <span>{data?.year}</span>
      </li>
      <li>
        <p> budget:</p>
        <span>{data?.boxOffice?.budget}</span>
      </li>
      <li>
        <p> openingWeekendUSA:</p>
        <span>{data?.boxOffice?.openingWeekendUSA}</span>
      </li>
      <li>
        <p>grossUSA:</p>
        <span>{data?.boxOffice?.grossUSA}</span>
      </li>
      <li>
        <p> cumulativeWorldwideGross:</p>
        <span>{data?.boxOffice?.cumulativeWorldwideGross}</span>
      </li>
      <div>
        <p id="key-word-label">Keywords</p>
        <div id="key-word">
          {data?.keywordList.map((elm) => {
            return <div key={elm}>{elm}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieAside;
