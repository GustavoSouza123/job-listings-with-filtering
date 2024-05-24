import React from "react";
import "../css/index.css";
import Background from "./Background";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="relative pb-10">
            <Background />
            <Content />
            <Footer />
        </div>
    );
}