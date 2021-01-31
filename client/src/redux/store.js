import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
middleware.push(reduxThunk);

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middleware)
);
