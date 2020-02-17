import { connect } from "react-redux";
import { fetchBooks } from "../../../actions/book_actions";
import BookIndex from "./book_index";

const mSTP = state => ({
  books: Object.values(state.entities.books)
});

const mDTP = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(mSTP, mDTP)(BookIndex);