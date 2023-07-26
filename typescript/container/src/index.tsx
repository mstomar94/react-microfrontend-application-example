import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";

/* Import the Complete App1 */
// import("App1/root");

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
