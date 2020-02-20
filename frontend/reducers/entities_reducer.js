import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import booksReducer from "./books_reducer";
import shelfReducer from "./shelf_reducer";
import shelvedBookReducer from "./shelved_book_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  books: booksReducer,
  shelves: shelfReducer,
  shelvedBooks: shelvedBookReducer
});

export default entitiesReducer;
