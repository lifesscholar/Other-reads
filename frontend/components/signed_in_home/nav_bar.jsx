import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, signout }) => {
  return (
    <nav className="signedin-masthead-container">
      <h4>Hello {currentUser.first_name} {currentUser.last_name}!</h4>
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
      <button className="signout-button" onClick={signout}>Sign Out</button>
    </nav>
  )
};

export default NavBar;

