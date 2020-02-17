import { 
  RECEIVE_BOOKS,
  RECEIVE_BOOK
 } from "../actions/book_actions";

 const booksReducer = (state = {}, action) => {
   Object.freeze(state);
    // debugger
   switch (action.type) {
     case RECEIVE_BOOKS:
      return action.books;
    case RECEIVE_BOOK:
      const newBook = { [action.book.book.id]: action.book.book };
      return Object.assign({}, state, newBook);
     default:
      return state;
   }
 };

 export default booksReducer;