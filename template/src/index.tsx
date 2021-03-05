import React from "react";
import ReactDOM from "react-dom";
import store from "@/Store/store";
import { Provider } from "react-redux";
import "./Helpers/AxiosInterceptor";
import "normalize.css";

import App from "@/Components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
