import React from "react";

export default function Keyword({ parent, text }) {
    return (
        <div className="">
            {parent === "filter" ? (
                <div className="">
                    {text}
                    <span className="">X</span>
                </div>
            ) : parent === "job" ? text : null}
        </div>
    );
}