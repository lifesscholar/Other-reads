import React from "react";
import { Link } from "react-router-dom";
import ShelvedBookDropdownContainer from "../shelved_book_dropdown/shelved_book_dropdown_container";

class BookShow extends React.Component {
  constructor(props) {
    super(props);

    this.userExists = this.userExists.bind(this);
  }

  componentWillMount() {
    this.props.fetchBook(this.props.match.params.bookId);
  }

  userExists() {
    if (this.props.currentUser) {
      return (
        <>
          <ShelvedBookDropdownContainer book = { this.props.book }/>
        </>
      );
    } else {
      return (
        <span className="shelved-dropdown-signedout">
          Sign in to add
          <br/>
          to your shelves
        </span>
      )
    }
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
          <Link to="/books" className="back-to-book-index">Back to Book Index</Link>
          {this.userExists()}
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