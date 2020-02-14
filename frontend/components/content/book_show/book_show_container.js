import { connect } from "react-redux";
import { fetchBook } from "../../../actions/book_actions";

const mSTP = (state, ownProps) => {
  return {
    book: state.entities.books[ownProps.match.params.bookId]
  }
}