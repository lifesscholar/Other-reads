import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ signout }) => {
  return (
    <nav className="signedin-masthead-container">
      <div className="left-nav">
        <Link to="/" className="nav-logo-link">
          <img src={window.Logo} alt="Other Reads Logo" className="nav-logo" />
        </Link>
        <ul className="nav-buttons">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/shelves" className="nav-link">My Books</Link>
          </li>
          <li>
            <div className="nav-link">Browse</div>
          </li>
        </ul>
      </div>
      <button className="signout-button" onClick={signout}>Sign Out</button>
    </nav>
  )
};

export default NavBar;

