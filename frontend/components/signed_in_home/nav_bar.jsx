import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, signout }) => {
  return (
    <nav className="signedin-masthead-container">
      <div>
        <h4>Other Reads</h4>
        <ul className="nav-buttons">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/" className="nav-link">My Books</Link>
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

