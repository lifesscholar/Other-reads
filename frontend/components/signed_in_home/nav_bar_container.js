import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { signout } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(null, mapDispatchToProps)(NavBar);