import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header-fixed">
      <div className="header-limiter">
        <h1>
          <a href="#">
            Company<span>logo</span>
          </a>
        </h1>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/AllNews">All News</NavLink>

          <NavLink to="National">National</NavLink>

          <NavLink to="Business">Business</NavLink>

          <NavLink to="Sports">Sports</NavLink>

          {/* <a href="#">World</a>
          <a href="#">Politics</a>
          <a href="#">Technology</a>
          <a href="#">Startup</a>
          <a href="#">Startup</a>
          <a href="#">Science</a> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
