import { connect } from "react-redux";
import { fetchBook } from "../../../actions/book_actions";
import BookShow from "./book_show";

const mSTP = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.match.params.bookId],
    currentUser: state.session.id
  };
};

const mDTP = dispatch => ({
  fetchBook: id => dispatch(fetchBook(id))
});

export default connect(mSTP, mDTP)(BookShow);