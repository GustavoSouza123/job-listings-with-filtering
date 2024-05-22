import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import Job from "./Job";

export default function Content() {
    const [filterKeywords, setFilterKeywords] = useState(['html', 'css', 'javascript']);

    return (
        <div className="w-full min-h-[calc(100vh-155px)] flex flex-col items-center bg-grayish-cyan-1 px-6">
            <Filter keywords={filterKeywords} />
            <Job keywords={['frontend', 'react']} />
            <Job keywords={['html', 'css', 'javascript', 'python']} />
        </div>
    );
}