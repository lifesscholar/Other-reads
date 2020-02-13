import React from "react";
import SignedOutMasthead from "../signed_out_home/signed_out_masthead";
import TalkingPoints from "../signed_out_home/talking_points";

const Auth = ({ currentUser, signout }) => {
  const SignedInMasthead = () => (
    <nav className="signedin-masthead-container">
      <h4>Hello {currentUser.first_name} {currentUser.last_name}!</h4>
      <button className="signout-button" onClick={signout}>Sign Out</button>
    </nav>
  )

  const SignedOutcontent = () => (
    <>
      <SignedOutMasthead />
      <TalkingPoints/>
    </>
  )

  return currentUser ? SignedInMasthead() : SignedOutcontent();
};

export default Auth;