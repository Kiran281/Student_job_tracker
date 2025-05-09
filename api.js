import axios from "axios";
const API_URL = "http://localhost:5000/jobs";

export const fetchJobs = () => axios.get(API_URL);
export const addJob = (job) => axios.post(API_URL, job);
