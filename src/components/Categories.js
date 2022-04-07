import React from "react";
import { gener } from "../utils/utils";
const Categories = () => {
  const categories = gener.split("|").filter((elm) => elm);
  return (
    <div className="search-elm">
      <div className="container">
        <h3 className="category-title">Search movie based on category</h3>
        <ul className="category">
          {categories.map((elm) => {
            return <li>{elm}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
