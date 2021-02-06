import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./auth/auth.reducer";
import surveyReducer from "./surveys/surveyReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveyReducer,
});
