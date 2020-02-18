import { connect } from "react-redux";
import NavBar from "./nav_bar_switch";


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};


export default connect(mapStateToProps)(NavBar);