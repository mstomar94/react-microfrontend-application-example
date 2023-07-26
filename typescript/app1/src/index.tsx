import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.scss";

const root = document.getElementById("app1");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(<App />);
