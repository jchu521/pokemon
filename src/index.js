import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

//redux
import { StateProvider } from "./redux/store";
import { initialState } from "./redux/initialState";
import { rootReducer } from "./redux/reducers/rootReducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={rootReducer}>
    <HashRouter>
      <App />
    </HashRouter>
  </StateProvider>,
  document.getElementById("root")
);
