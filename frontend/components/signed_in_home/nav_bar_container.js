import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { signout } from "../../actions/session_actions";


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);