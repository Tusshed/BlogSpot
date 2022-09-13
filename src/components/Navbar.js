import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="nav-wrapper blue">
        <div className="container">
          <div className="brand-logo right">
            <Link to="#">Blogspot</Link>
          </div>
          <ul>
            <li>
              <Link to="/create">Write Blog</Link>
            </li>
            <li>
              <Link to="/">Blog Entries</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
