import { connect } from "react-redux";
import { createShelvedBook, updateShelvedBook } from "../../../actions/shelved_book_actions";
import { fetchShelves } from "../../../actions/shelf_actions";
import ShelvedBookDropdown from "./shelved_book_dropdown";

const mSTP = (state, ownProps) => {
  return {
    book: ownProps.book,
    shelves: Object.values(state.entities.shelves),
    // shelvedBooks: 
  };
};

const mDTP = dispatch => {
  return {
    fetchShelves: () => dispatch(fetchShelves()),
    createShelvedBook: shelvedBook => dispatch(createShelvedBook(shelvedBook)),
    updateShelvedBook: shelvedBook => dispatch(updateShelvedBook(shelvedBook))
  };
};

export default connect(mSTP, mDTP)(ShelvedBookDropdown);