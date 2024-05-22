import React from "react";
import "../css/index.css";
import Background from "./Background";
import Content from "./Content";
import Footer from "./Footer";

export default function App() {
    return (
        <div className="">
            <Background />
            <Content />
            <Footer />           
        </div>
    );
}