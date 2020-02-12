import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignInFormContainer from "./session_forms/signin_form_container";
import SignUpFormContainer from "./session_forms/signup_form_container";

const App = () => (
  <div className="content">
    <nav>
      <h1>Otherreads</h1>
      <SignInFormContainer/>
    </nav>
    <div className="masthead">
      <SignUpFormContainer/>
    </div>
  </div>
);

export default App;