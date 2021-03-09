import * as c from "./../actions/ActionTypes";

const loginReducer = (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_LOGIN:
      return !state;
    default:
      return state;
  }
};
export default loginReducer;
