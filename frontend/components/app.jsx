import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// import SignInFormContainer from "./signed_out_home/signin_form_container";
// import SignUpFormContainer from "./signed_out_home/signup_form_container";
import AuthContainer from "./authentication/auth_container";
import { Footer } from "./footer";
const App = () => (
  <div className="content">
    <AuthContainer/>
    {/* <div className="signedout-masthead-container">
      <nav>
        <h1>Otherreads</h1>
        <SignInFormContainer/>
      </nav>
      <div className="masthead">
        <SignUpFormContainer/>
      </div>

    </div> */}
    <Route/>
    <Footer/>
  </div>
);

export default App;