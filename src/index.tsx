// import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DevTools, loadServer } from "jira-dev-tool";
// 务必在jira-dev-tool后面引入
import "antd/dist/antd.less";
import { AuthProvider } from "context/auth";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
// import { AppProviders } from "context";
// import { Profiler } from "components/profiler";

loadServer(() =>
  ReactDOM.render(
    // <React.StrictMode>
    //   <Profiler id={"Root App"} phases={["mount"]}>
    <BrowserRouter>
      <AuthProvider>
        <DevTools />
        <App />
      </AuthProvider>
    </BrowserRouter>,
    //   </Profiler>
    // </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
