import React from "react";
import { Link } from "react-router-dom";

const SignedOutNavBar = ({ signout }) => {
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
            <Link to="/books" className="nav-link">Browse</Link>
          </li>
        </ul>
      </div>
      <Link to="/" className="signin-nav-link">Sign In/Join</Link>
    </nav>
  )
};

export default SignedOutNavBar;