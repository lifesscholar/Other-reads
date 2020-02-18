import React from "react";
import SignedOutMasthead from "../signed_out_home/signed_out_masthead";
import NavBarContainer from "../signed_in_home/nav_bar_container";

const Auth = ({ currentUser }) => {
  const SignedInMasthead = () => (
    <div className="siteheader">
      <NavBarContainer/>
    </div>
  )

  const SignedOutcontent = () => (
    <>
      <SignedOutMasthead />
    </>
  )
  return currentUser ? SignedInMasthead() : SignedOutcontent();
};

export default Auth;