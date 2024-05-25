import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Job from "./Job";

export default function Content() {
    const [filterKeywords, setFilterKeywords] = useState([]);
    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('./data.json');
                const json = await response.json();
                setJobsData(json);
           } catch(err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    function handleKeywordClick(keyword) {
        if(!filterKeywords.includes(keyword)) {
            setFilterKeywords(filterKeywords => [...filterKeywords, keyword]);
        }
    }

    function handleRemoveClick(keyword) {
        setFilterKeywords(filterKeywords.filter(word => word != keyword));
    }

    function handleClearClick() {
        setFilterKeywords([]);
    }

    return (
        <div className="w-full min-h-[calc(100vh-155px-40px)] flex flex-col items-center bg-grayish-cyan-1 px-6">
            <Filter keywords={filterKeywords} onRemoveClick={handleRemoveClick} onClearClick={handleClearClick} />
            {jobsData.map(job => 
                <Job key={job.id} data={job} filterKeywords={filterKeywords} onKeywordClick={handleKeywordClick} />
            )}
        </div>
    );
}