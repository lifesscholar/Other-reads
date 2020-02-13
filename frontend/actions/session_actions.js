import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signoutCurrentUser = () => ({
  type: SIGNOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return (
      {
      type: RECEIVE_SESSION_ERRORS,
      signin: errors
    }
  );
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  signup: errors
});

export const signup = user => dispatch => APIUtil.signup(user)
  .then(user => (dispatch(receiveCurrentUser(user))), 
        err => (dispatch(receiveSignupErrors(err.responseJSON)))
    );


export const signin = user => dispatch => APIUtil.signin(user)
  .then(user => (dispatch(receiveCurrentUser(user))), 
        err => (dispatch(receiveErrors(err.responseJSON)))
    );

export const signout = () => dispatch => APIUtil.signout()
  .then( () => (dispatch(signoutCurrentUser())),
        err => (dispatch(receiveErrors(err.responseJSON)))
    );   
