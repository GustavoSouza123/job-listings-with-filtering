import React from "react";

export default function Tag({ text }) {
    let background = text === "new!" ? "cyan" : text === "featured" ? "grayish-cyan-3" : null;

    return (
        <div className={`h-6 mr-2 px-2 pt-[4px] bg-${background} flex justify-center items-center text-sm text-white font-semibold uppercase rounded-3xl`}>
            {text}
        </div>
    );
}