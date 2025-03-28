import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import App from "../components/App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../components/Contact";
import Feed from "../components/Feed";
import WaterLevelMonitor from "../components/Monitor";
import HomePage from "../components/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/Feed",
        element: <Feed />
    },
    {
        path: "/Monitor",
        element: <WaterLevelMonitor />
    },
    {
        path: "/Contact",
        element: <Contact />
    },
    {
        path: "/Home",
        element: <HomePage />
    }
])

const rootelement = document.getElementById("root")
const root = ReactDOM.createRoot(rootelement);
root.render(

    <RouterProvider router={Router} />

);