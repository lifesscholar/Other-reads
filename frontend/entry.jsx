import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchShelves, fetchShelf, deleteShelf } from "./actions/shelf_actions";

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signin = signin;
  // window.signout = signout;
  // window.signup = signup;
  window.fetchShelves = fetchShelves;
  window.fetchShelf = fetchShelf;
  window.deleteShelf = deleteShelf;

  ReactDOM.render(< Root store={store}/>, root);
});