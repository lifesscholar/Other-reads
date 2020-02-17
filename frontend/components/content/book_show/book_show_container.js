import { connect } from "react-redux";
import { fetchBook } from "../../../actions/book_actions";
import BookShow from "./book_show";

const mSTP = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.match.params.bookId]
  };
};

const mDTP = dispatch => ({
  fetchBook: bookId = dispatch(fetchBook(bookId))
});

export default connect(mSTP, mDTP)(BookShow);