import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { ProtectedRoute } from "../util/route.util";
import AuthContainer from "./authentication/auth_container";
import { Footer } from "./footer";
import BookShowContainer from "./content/book_show/book_show_container";
import TalkingPoints from "../components/signed_out_home/talking_points";
import BookIndexContainer from "./content/book_index/book_index_container";
import NavBarContainer from "./navbar_switch/nav_bar_switch_container";
import MyBooksContainer from "./content/shelves/my_books_container";

const App = () => (
  <div className="content">
    <div className="content-wrap">
      <Switch>
        <Route exact path="/" component={AuthContainer}/>
        <NavBarContainer/>
      </Switch>
      <Switch>
        <Route exact path="/" component={TalkingPoints}/>
      </Switch>

      <Switch>
        <Route exact path="/" component={BookIndexContainer}/>
        <Route exact path="/books" component={BookIndexContainer}/>
        <Route exact path='/books/:bookId' component={BookShowContainer} />
        <ProtectedRoute exact path="/shelves" component={MyBooksContainer}/>
      </Switch>

      <Route/>
      <Footer/>
    </div>
  </div>
);

export default App;