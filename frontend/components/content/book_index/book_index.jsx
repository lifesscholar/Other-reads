import React from "react";
import BookIndexItem from "./book_index_item";

const BookIndex = ({ books }) => (
  <ul className="book-index">
    {books.map (book =>(
      <BookIndexItem
        book={book}
        key={book.id}
      />
    ))}
  </ul>
);

export default BookIndex;