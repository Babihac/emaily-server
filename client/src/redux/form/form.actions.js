import axios from "axios";
import { AuthActionTypes } from "../auth/auth.types";
import { formActionTypes } from "./form.types";
export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: AuthActionTypes.FETCH_USER, payload: res.data });
};
