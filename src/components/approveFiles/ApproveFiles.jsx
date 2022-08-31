import React, { useState, useEffect } from "react";
import ApproveFileContainer from "./ApproveFileContainer";

const ApproveFiles = () => {
  const [jobseekerFiles, setJobseekerFiles] = useState([]);

  useEffect(() => {
    const employerFetch = async () => {
      try {
        const response = await fetch(`http://localhost:3000/job_seekers`);
        const data = await response.json();
        setJobseekerFiles(data);
      } catch (error) {
        console.log("fetch employees error", error);
      }
    };
    employerFetch();
  }, []);
  console.log(jobseekerFiles);
  const displayFiles = jobseekerFiles.map((employee) => (
    <ApproveFileContainer key={employee.id} employee={employee} />
  ));

  return <div className="mt-3 container">{displayFiles}</div>;
};

export default ApproveFiles;
