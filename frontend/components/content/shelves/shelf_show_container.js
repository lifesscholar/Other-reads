import { connect } from "react-redux";
import { fetchShelves, createShelf } from "../../../actions/shelf_actions";
import MyBooks from "./my_books";

const mSTP = (state) => {
  return {
    shelves: Object.values(state.entities.shelves),
    shelf: state.entities.shelves[OwnProps.match.params.shelfId]
  };
};

const mDTP = dispatch => ({
  fetchShelves: () => dispatch(fetchShelves()),
  createShelf: shelf => dispatch(createShelf(shelf))
});

export default connect(mSTP, mDTP)(MyBooks);