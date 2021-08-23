// import * as APIUtil from "../util/shelved_book_api_util";

// export const RECEIVE_SHELVED_BOOK = "RECEIVE_SHELVED_BOOK";
// export const REMOVE_SHELVED_BOOK = "REMOVE_SHELVED_BOOK";

// export const receiveShelvedBook = shelvedBook => {
//   return {
//     type: RECEIVE_SHELVED_BOOK,
//     shelvedBook
//   };
// };

// export const removeShelvedBook = shelvedBookId => {
//   return {
//     type: REMOVE_SHELVED_BOOK,
//     shelvedBookId
//   };
// };

// export const createShelvedBook = shelvedBook => dispatch => {
//   return APIUtil.createShelvedBook(shelvedBook)
//   .then( shelvedBook => dispatch(receiveShelvedBook(shelvedBook))
//   );
// };

// export const updateShelvedBook = shelvedBook => dispatch => {
//   return APIUtil.updateShelvedBook(shelvedBook)
//   .then( shelvedBook => dispatch(receiveShelvedBook(shelvedBook))
//   );
// };

// export const deleteShelvedBook = shelvedBookId => dispatch => {
//   return APIUtil.removeShelvedBook(shelvedBookId)
//   .then( () => dispatch(receiveShelvedBook(shelvedBookId))
//   );
// };
