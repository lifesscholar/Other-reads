import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import AuthContainer from "./authentication/auth_container";
import { Footer } from "./footer";
import BookShowContainer from "./content/book_show/book_show_container";

const App = () => (
  <div className="content">
    {/* <AuthContainer/> */}
    
    <Switch>
      <Route exact path="/" component = {AuthContainer}/>
      <Route exact path='/books/:bookId' component={BookShowContainer} />
    </Switch>

    <Route/>
    <Footer/>
  </div>
);

export default App;