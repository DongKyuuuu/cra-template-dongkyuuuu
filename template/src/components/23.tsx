import React from "react";
import Router from "@/components/router";
import AxiosInterceptor from "@/utills/AxiosInterceptor";
import { hot } from "react-hot-loader/root";

function App() {
  AxiosInterceptor();
  return <Router></Router>;
}

export default process.env.NODE_ENV === "development" ? hot(App) : App;
