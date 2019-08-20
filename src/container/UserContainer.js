import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Test from "../Test.js";
import { GetUser } from "../action/useraction.js";

const mapDispatchToProps = dispatch => {
  return {
    GetUsers: () => {
      dispatch(GetUser());
    }
  };
};
const mapStateToProps = state => {
  console.log(state)
  return {
    UserData: state.userReducer
  };
};

const UserConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Test)
);
export default UserConatiner;
