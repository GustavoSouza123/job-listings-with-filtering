import React from "react";
import Image from "./Image";
import Tag from "./Tag";
import Keyword from "./Keyword";

export default function Job({ data, filterKeywords, onKeywordClick }) {
    const keywords = [data.role, data.level, ...data.languages, ...data.tools];

    const component = (
        <div key={data.id} className={`w-full max-w-[1110px] lg:h-[152px] bg-white rounded-md flex sm:flex-col justify-between items-center sm:px-[24px] px-10 py-7 sm:pt-[32px] border-l-[5px] border-solid ${data.featured ? 'border-cyan' : 'border-transparent'} mb-[24px] sm:mb-[40px] shadow-custom`}>
            <div className="sm:w-full w-1/2 lg:min-w-[380px] flex items-center gap-6 sm:relative">
                <Image src={data.logo} />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                        <div className="text-cyan font-bold mr-4 text-lg">{data.company}</div>
                        {data.new && <Tag text="new!" />}
                        {data.featured && <Tag text="featured" />}
                    </div>
                    <div className="flex items-center text-[20px] font-bold text-grayish-cyan-4 hover:text-cyan cursor-pointer transition">
                        {data.position}
                    </div>
                    <div className="flex items-center gap-4 sm:gap-[10px] text-grayish-cyan-3 text-lg">
                        <div className="">{data.postedAt}</div>
                        <span className="w-1 h-1 rounded-full bg-grayish-cyan-3"></span>
                        <div className="">{data.contract}</div>
                        <span className="w-1 h-1 rounded-full bg-grayish-cyan-3"></span>
                        <div className="">{data.location}</div>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block w-full h-[1px] bg-grayish-cyan-3 my-5"></div>
            {keywords.length > 0 && (
                <ul className="sm:w-full flex gap-4 flex-wrap justify-end sm:justify-start">
                    {keywords.map((keyword, index) => 
                        <li className="" key={index}>
                            <Keyword parent="job" text={keyword} onClick={() => onKeywordClick(keyword)} />
                        </li>
                    )}
                </ul>
            )}
        </div>
    );

    if(filterKeywords.length === 0 || filterKeywords.every(keyword => keywords.includes(keyword))) {
        return component;
    }
}