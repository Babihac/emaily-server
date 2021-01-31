import "materialize-css/dist/css/materialize.min.css";

import React from "react";
import App from "./components/App";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
