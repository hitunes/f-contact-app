import "./index.css";
import React from "react";
import store from "./store";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
