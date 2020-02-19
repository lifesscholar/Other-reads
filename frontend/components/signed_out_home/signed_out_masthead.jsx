import React from "react";
import { Link } from "react-router-dom";

import SignInFormContainer from "./signin_form_container";
import SignUpFormContainer from "./signup_form_container";

const SignedOutMasthead = () => (
  <div className="siteheader">
    <div className="signedout-masthead-container">

      <nav className="signedout-nav">
        <Link to="/" className="logo-link">
          <img src={window.Logo} alt="Other Reads Logo" className="logo"/>
        </Link>
        <SignInFormContainer />
      </nav>

      <div className="masthead">
        <SignUpFormContainer />
      </div>

    </div>
  </div>
);

export default SignedOutMasthead;


