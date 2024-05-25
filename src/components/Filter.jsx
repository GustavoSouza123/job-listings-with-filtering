import React from "react";
import Keyword from "./Keyword";

export default function Filter({ keywords, onRemoveClick, onClearClick }) {
    return (
        <div className={`w-full max-w-[1110px] min-h-[72px] bg-white rounded-md flex justify-between items-center sm:px-[24px] px-10 py-5 relative bottom-9 shadow-custom ${keywords.length === 0 ? 'invisible mb-[-17px]' : 'sm:mb-[22px]'}`}>
            <ul className="flex gap-4 flex-wrap">
                {keywords.map((keyword, index) => 
                    <li className="" key={index}>
                        <Keyword parent="filter" text={keyword} onRemoveClick={() => onRemoveClick(keyword)} />
                    </li>
                )}
            </ul>
            <div className="text-cyan font-bold cursor-pointer hover:underline ml-5" onClick={onClearClick}>Clear</div>
        </div>
    );
}