import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CursorProvider from "./store/CursorProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CursorProvider>
        <App />
      </CursorProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
