import { connect } from "react-redux";
import Auth from "./auth";


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


export default connect(mapStateToProps)(Auth);