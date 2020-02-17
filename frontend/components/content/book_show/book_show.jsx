import React from "react";

class BookShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    debugger
    this.props.fetchBook(this.props.match.params.bookId);
  }

  render () {
    if (!this.props.book){
      return null;
    }
    // debugger
    const { book } = this.props;
    const picture_url = book.picture_url;
    return(
      <div className="book-content">
        <img src={picture_url} alt={book.picure_url}/>
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