import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Router from "@/Components/Router";
import store from "@/Store/store";

import "./Helpers/AxiosInterceptor";
import "normalize.css";

function App() {
  return <Router></Router>;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
