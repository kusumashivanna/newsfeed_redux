import * as newsAction from "../action/newAction.js";
const NewsData = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case newsAction.REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case newsAction.SUCCESS:
    console.log("=====",action.newsdata)
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        newsData: action.newsdata
      });

    case newsAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.newserror
      });
    default:
      return state;
  }
};
export default NewsData;
