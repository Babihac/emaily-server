import { surveyActionTypes } from "./survey.types";
import axios from "axios";

export const fetchSurvey = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: surveyActionTypes.FETCH_SURVEYS, payload: res.data });
};
