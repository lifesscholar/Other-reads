import React from "react";
import BookIndexItem from "./book_index_item";

class BookIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBooks();
  }
  
  render () {
    const { books } = this.props;
    if (books.length < 1){
      return null;
    }
    
    return (
      <div>
        <ul className="book-index">
          {books.map (book =>(
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))}
        </ul>
      </div>
    )
  }
};

export default BookIndex;