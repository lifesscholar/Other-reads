import React from "react";

import SignInFormContainer from "./signin_form_container";
import SignUpFormContainer from "./signup_form_container";

const SignedOutMasthead = () => (
  <div className="siteheader">
    <div className="signedout-masthead-container">

      <nav>
        <h1 className="title-header">Other reads</h1>
        <SignInFormContainer />
      </nav>

      <div className="masthead">
        <SignUpFormContainer />
      </div>

    </div>
  </div>
);

export default SignedOutMasthead;


