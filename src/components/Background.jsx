import React from "react";
import bgHeader from "../assets/bg-header-desktop.svg";

export default function Background() {
    const style = {
        backgroundImage: `url(${bgHeader})`,
        backgroundPosition: 'center',
    };

    return (
        <div className="w-full h-[155px] bg-cyan" style={style}></div>
    );
}

// tailwind classes for background image: bg-desktop-header bg-center