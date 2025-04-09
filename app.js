import React, { useEffect, useState } from "react";
import { fetchJobs } from "./services/api";

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs().then(response => setJobs(response.data));
    }, []);

    return (
        <div>
            <h1>Student Job Tracker</h1>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job.company} - {job.role}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
