import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import App from "../components/App"

const rootelement = document.getElementById("root")
const root = ReactDOM.createRoot(rootelement);
root.render(<App />);