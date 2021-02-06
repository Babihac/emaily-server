import { surveyActionTypes } from "./survey.types";
import { selectSurveysList } from "./surveys.selectors";

const INIT_STATE = {
  surveys: [],
};

const surveysReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case surveyActionTypes.FETCH_SURVEYS:
      return {
        ...state,
        surveys: action.payload,
      };
    default:
      return state;
  }
};
export default surveysReducer;
