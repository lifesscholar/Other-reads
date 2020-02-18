import React from "react";
import { Link } from "react-router-dom";

const SignedOutNavBar = ({ signout }) => {
  return (
    <nav className="signedin-masthead-container">
      <div className="left-nav">
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
      <Link to="/" className="signin-nav-link">Sign In/Join</Link>
    </nav>
  )
};

export default SignedOutNavBar;