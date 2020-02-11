import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  debugger
  return (
      {
      type: RECEIVE_SESSION_ERRORS,
      errors
    }
  );
};

export const signup = user => dispatch => APIUtil.signup(user)
  .then(user => (dispatch(receiveCurrentUser(user))), 
        err => (dispatch(receiveErrors(err.responseJSON)))
      );


export const signin = user => dispatch => {
  // debugger
  return APIUtil.signin(user)
  .then(user => {
    // debugger
    return dispatch(receiveCurrentUser(user));
  }, 
    err => {
      // debugger
      return dispatch(receiveErrors(err.responseJSON))
    });
};

export const signout = () => dispatch => { 
  debugger 
  return APIUtil.signout().then(
    () => {
      console.log("hello Cindy");
      debugger
    }, 
    () => {
      console.log("hello Cindy");
      debugger
      return dispatch(signoutCurrentUser());
    }
       
  );
};