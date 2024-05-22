import React from "react";

export default function Footer() {
    return (
        <footer className="absolute z-50 bottom-0 w-full h-10 flex justify-center items-center text-grayish-cyan-4">
            <span className="mr-1">Challenge by <a className="text-cyan font-semibold" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span>
            <span className="mr-1">Coded by <a className="text-cyan font-semibold" href="https://www.gustavo-souza.com" target="_blank">Gustavo Souza</a>.</span>
        </footer>
    );
}