import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mSTP = ({ errors }) => ({
  errors: errors.session
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignUpForm);