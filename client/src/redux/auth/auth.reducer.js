import { AuthActionTypes } from "./auth.types";
const INIT_STATE = {
  user: null,
};
const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER:
      return {
        ...state,
        user: action.payload || false,
      };
    default:
      return state;
  }
};

export default authReducer;
