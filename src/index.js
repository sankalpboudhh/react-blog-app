import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { ThemeContextProvider } from "./ThemeContext.js";
import LikeButton from "./LikeButton.js";
// import LikeButton from "./"

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
      {/* <LikeButton /> */}
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
