import { connect } from "react-redux";
import Auth from "./auth";
import { signout } from "../../actions/session_actions";


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);