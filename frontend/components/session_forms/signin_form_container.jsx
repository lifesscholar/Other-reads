import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SignInForm from "./signin_form";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mDTP = dispatch => {
  return {
    signin: user => dispatch(signin(user))
  };
};

export default connect(mSTP, mDTP)(SignInForm);