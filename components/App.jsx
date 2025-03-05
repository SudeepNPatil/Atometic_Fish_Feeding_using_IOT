import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import Feed from "./Feed";


export default function App() {
    return (
        <div className="bg-blue-50">
            <Header />
            <Feed />
            {/*  <Contact />
            <Footer /> */}
        </div>
    )
}