import React from "react";
import SignedOutNavBar from "../signed_out_home/signed_out_nav_bar";
import NavBarContainer from "../signed_in_home/nav_bar_container";

const NavBar = ({ currentUser }) => {
  const SignedInMasthead = () => (
    <div className="siteheader">
      <NavBarContainer />
    </div>
  )

  const SignedOutcontent = () => (
    <div className="siteheader">
      <SignedOutNavBar/>
    </div>
  )
  return currentUser ? SignedInMasthead() : SignedOutcontent();
};

export default NavBar;