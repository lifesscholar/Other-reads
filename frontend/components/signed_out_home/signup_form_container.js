import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mSTP = ({ errors }) => ({
  errors: errors.signup
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SignUpForm);