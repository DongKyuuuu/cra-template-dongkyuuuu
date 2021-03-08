import React from "react";
import Router from "@/Components/Router/Router";
import { hot } from "react-hot-loader/root";

function App() {
  return <Router></Router>;
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
