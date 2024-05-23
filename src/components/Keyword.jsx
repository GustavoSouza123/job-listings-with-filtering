import React from "react";
import removeIcon from "../assets/icon-remove.svg";

export default function Keyword({ parent, text }) {
    return (
        <div className={`h-8 bg-grayish-cyan-2 ${parent === "job" && "hover:bg-cyan"} rounded-md font-bold flex items-center transition`}>
            {parent === "filter" ? (
                <div className="h-full flex items-center rounded-md">
                    <div className="px-[10px] text-cyan">{text}</div>
                    <span className="w-8 h-full bg-cyan hover:bg-grayish-cyan-4 text-white flex justify-center items-center rounded-r-md cursor-pointer transition">
                        <img className="h-[13px]" src={removeIcon} alt="remove icon" />
                    </span>
                </div>
            ) : parent === "job" ? (
                <div className="px-[10px] text-cyan hover:text-white cursor-pointer">{text}</div>
            ) : null}
        </div>
    );
}