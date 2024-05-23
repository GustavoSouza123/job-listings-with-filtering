import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Job from "./Job";

export default function Content() {
    const [filterKeywords, setFilterKeywords] = useState(['html', 'css', 'javascript']);
    const [jobsData, setJobsData] = useState(null);

    useEffect(() => {
        // fetch('./data.json')
        //     .then(res => res.json())
        //     .then(json => {
        //         setJobsData(json);
        //     });
    }, []);

    return (
        <div className="w-full min-h-[calc(100vh-155px)] flex flex-col items-center bg-grayish-cyan-1 px-6">
            <Filter keywords={filterKeywords} />
            <Job keywords={['frontend', 'react']} />
            <Job keywords={['html', 'css', 'javascript', 'python']} />
        </div>
    );
}