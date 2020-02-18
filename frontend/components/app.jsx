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
// import TalkingPoints from "../components/signed_out_home/talking_points";
import BookIndexContainer from "./content/book_index/book_index_container";

const App = () => (
  <div className="content">
    <div className="content-wrap">
      <AuthContainer/>
      
      <Switch>
        {/* <Route exact path="/" component = {TalkingPoints}/> */}
        <Route exact path="/" component={BookIndexContainer}/>
        <Route exact path='/books/:bookId' component={BookShowContainer} />
      </Switch>

      <Route/>
      <Footer/>
    </div>
  </div>
);

export default App;