import React from "react";
import { Link } from "react-router-dom";

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  render () {
    if (!this.props.book){
      return null;
    }
    const { book } = this.props;
    const picture_url = book.picture_url;
    return(
      <div className="book-content">
        <div className="book-sidebar">
          <img src={eval(`window.${picture_url}`)} alt={book.picure_url} className="book-cover"/>
          <Link to="/" className="back-to-book-index">Back to Book Index</Link>
        </div>
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <h3 className="book-author">by {book.author}</h3>
          <p>{book.description}</p>
        </div>
      </div>
    );
  }

}
export default BookShow;