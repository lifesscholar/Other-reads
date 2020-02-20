import * as APIUtil from "../util/shelf_api_util";


export const RECEIVE_SHELVES = "RECEIVE_SHELVES";
export const RECEIVE_SHELF = "RECEIVE_SHELF";
export const REMOVE_SHELF = "REMOVE_SHELF";
// export const RECEIVE_SHELF_ERRORS = "RECEIVE_SHELF_ERRORS";

export const receiveShelves = shelves => {
  return {
    type: RECEIVE_SHELVES,
    shelves
  };
};

export const receiveShelf = shelf => {
  return {
    type: RECEIVE_SHELF,
    shelf
  };
};

export const removeShelf = shelfId => {
  return {
    type: REMOVE_SHELF,
    shelfId
  };
};

// export const receiveShelfErrors = errors => {
//   return {
//     type: RECEIVE_SHELF_ERRORS,
//     errors
//   };
// };

export const fetchShelves = () => dispatch => {
  return APIUtil.fetchShelves()
  .then( shelves => dispatch(receiveShelves(shelves))
  );
};

export const fetchShelf = shelfId => dispatch => {
  return APIUtil.fetchShelf(shelfId)
  .then( shelf => dispatch(receiveShelf(shelf))
  );
};

export const createShelf = shelf => dispatch => {
  return APIUtil.createShelf(shelf)
  .then( shelf => dispatch(receiveShelf(shelf))
  );
};

export const updateShelf = shelf => dispatch => {
  return APIUtil.updateShelf(shelf)
  .then( shelf => dispatch(receiveShelf(shelf))
  );
};

export const deleteShelf = shelfId => dispatch => {
  debugger
  return APIUtil.removeShelf(shelfId)
  .then( shelfId => dispatch(removeShelf(shelfId))
  );
};

