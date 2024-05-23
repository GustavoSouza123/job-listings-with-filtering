import React from "react";
import Image from "./Image";
import Tag from "./Tag";
import Keyword from "./Keyword";

export default function Job({ tags = {new: true, featured: true}, keywords }) {
    return (
        <div className={`w-full max-w-[1110px] h-[152px] bg-white rounded-md flex justify-between items-center gap-4 px-10 border-l-[5px] border-solid ${tags.featured ? 'border-cyan' : 'border-transparent'} mb-10 shadow-custom`}>
            <div className="flex items-center gap-6">
                <Image />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                        <div className="text-cyan font-bold mr-4 text-lg">Photosnap</div>
                        {tags.new && <Tag text="new!" />}
                        {tags.featured && <Tag text="featured" />}
                    </div>
                    <div className="flex items-center text-[20px] font-bold text-grayish-cyan-4 hover:text-cyan cursor-pointer transition">
                        Senior Frontend Developer
                    </div>
                    <div className="flex items-center gap-4 text-grayish-cyan-3 text-lg">
                        <div className="">1d ago</div>
                        <span className="w-1 h-1 rounded-full bg-grayish-cyan-3"></span>
                        <div className="">Full Time</div>
                        <span className="w-1 h-1 rounded-full bg-grayish-cyan-3"></span>
                        <div className="">USA only</div>
                    </div>
                </div>
            </div>
            {keywords.length > 0 && (
                <ul className="flex gap-4">
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