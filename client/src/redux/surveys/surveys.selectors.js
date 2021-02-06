import { createSelector } from "reselect";

const selectSurveys = (state) => state.surveys;

export const selectSurveysList = createSelector(
  [selectSurveys],
  (surveys) => surveys.surveys
);
