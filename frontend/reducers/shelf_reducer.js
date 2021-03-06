import { 
  RECEIVE_SHELVES,
  RECEIVE_SHELF,
  REMOVE_SHELF
 } from "../actions/shelf_actions";

 const shelfReducer = (state = {}, action) => {
   Object.freeze(state);
    let newState;
   switch (action.type) {
     case RECEIVE_SHELVES:
       return action.shelves;
     case RECEIVE_SHELF:
      newState ={ [action.shelf.id]: action.shelf };
      return Object.assign({}, state, newState);
    case REMOVE_SHELF:
      newState = Object.assign({}, state);
      delete newState[action.shelfId];
      return newState;
     default:
       return state;
   }
 };

 export default shelfReducer;