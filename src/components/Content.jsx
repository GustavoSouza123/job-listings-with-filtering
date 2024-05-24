import React from "react";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Job from "./Job";

export default function Content() {
    const [filterKeywords, setFilterKeywords] = useState(['html', 'css', 'javascript']);
    const [jobs, setJobs] = useState(null);

    const jobComponents = [];

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch('./data.json');
    //             const json = await response.json();
    //             setJobs(json);
    //             jobs.map(job => {
    //                 jobComponents.push(<Job data={job} />)
    //             })
    //             console.log(jobComponents)
    //         } catch(err) {
    //             console.log(err)
    //         }
    //     }

    //     fetchData();
    // }, []);

    return (
        <div className="w-full min-h-[calc(100vh-155px)] flex flex-col items-center bg-grayish-cyan-1 px-6">
            <Filter keywords={filterKeywords} />
            {/* {console.log(jobs)} */}
        </div>
    );
}