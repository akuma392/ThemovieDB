import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container flex space-between item-center">
        <Link to="/">
          <h3>Movies List</h3>
        </Link>
        <ul>
          <NavLink to="/movies">
            <li>Movies</li>
          </NavLink>
          <NavLink to="search">
            <li>Search</li>
          </NavLink>
          <NavLink to="categories">
            <li>In Cinema halls</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
