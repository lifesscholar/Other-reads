// import { RECEIVE_SHELVED_BOOK, REMOVE_SHELVED_BOOK } from "../actions/shelved_book_actions";

// const shelvedBookReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let newState;

//   switch (action.type) {
//     case RECEIVE_SHELVED_BOOK:
//       newState = { [action.shelvedBook.id]: action.shelvedBook };
//       return Object.assign({}, state, newState);
//     case REMOVE_SHELVED_BOOK:
//       newState = Object.assign({}, state);
//       delete newState[action.shelvedBookId];
//       return newState;
//     default:
//       return state;
//   }
// };

// export default shelvedBookReducer;