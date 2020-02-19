import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import booksReducer from "./books_reducer";
import shelfReducer from "./shelf_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  shelves: shelfReducer
});

export default entitiesReducer;
