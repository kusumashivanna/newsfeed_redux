import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import News from "../News";
import { GetNews } from "../action/newAction.js";

const mapDispatchToProps = dispatch => {
  return {
    GetNEW: () => {
      dispatch(GetNews());
    }
  };
};
const mapStateToProps = state => {
  return {
    NewsData: state.newsReducer
  };
};

const NewConatiner = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(News)
);
export default NewConatiner;
