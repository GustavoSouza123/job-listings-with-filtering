import React from "react";
import Image from "./Image";
import Tag from "./Tag";
import Keyword from "./Keyword";

export default function Job({ tags = {new: false, featured: true}, keywords }) {
    return (
        <div className={`w-full max-w-[1110px] h-[152px] bg-white rounded-md flex items-center gap-4 px-10 border-l-[5px] border-solid ${tags.featured ? 'border-cyan' : 'border-transparent'} mb-10`}>
            <Image />
            <Tag />
            {keywords.length > 0 && (
                <ul className="">
                    {keywords.map((keyword, index) => 
                        <li className="" key={index}>
                            <Keyword parent="job" text={keyword} />
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
}