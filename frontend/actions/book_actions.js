import * as APIUtil from "../util/book_api_util";

export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

const receiveBooks = books => {
  return {
    type: RECEIVE_BOOKS,
    books
  };
};

const receiveBook = book => {
  return {
    type: RECEIVE_BOOK,
    book
  };
};

export const fetchBooks = () => dispatch => {
  return APIUtil.fetchBooks()
    .then( books => dispatch(receiveBooks(books))
    );
};

export const fetchBook = id => dispatch => {
  return APIUtil.fetchBook(id)
    .then( book => dispatch(receiveBook(book))
    );
};