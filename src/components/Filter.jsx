import React from "react";
import Keyword from "./Keyword";

export default function Filter({ keywords }) {
    return (
        <div className="w-full max-w-[1110px] h-[72px] bg-white rounded-md flex justify-between items-center px-10 relative bottom-9 shadow-custom">
            {keywords.length > 0 && (
                <ul className="flex gap-4">
                    {keywords.map((keyword, index) => 
                        <li className="" key={index}>
                            <Keyword parent="filter" text={keyword} />
                        </li>
                    )}
                </ul>
            )}
            <div className="text-cyan font-bold cursor-pointer hover:underline">Clear</div>
        </div>
    );
}