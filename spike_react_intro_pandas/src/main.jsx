import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Website from "./Home.jsx";
import Characters from "./Characters.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Website /> */}
    <Characters />
  </React.StrictMode>
);
