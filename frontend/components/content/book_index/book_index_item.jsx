import React from "react";
import { Link } from "react-router-dom";

class BookIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const bookId = this.props.book.id;
    this.props.history.push(`/books/${bookId}`);
  }

  render() {
    const { id, picture_url } = this.props.book;
    return (
      <li className="book-index-item">
        <Link to={`/books/${id}`}>
          <img 
            src={eval(`window.${picture_url}`)} 
            alt={picture_url}
            className="book-index-cover"
          />
        </Link>
      </li>
    );
  }
}

export default BookIndexItem;