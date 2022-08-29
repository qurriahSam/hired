import React, { useEffect, useState } from "react";
import DeleteEmployeeCard from "./DeleteEmployeeCard";

function Jobseekers() {
  const [jobseekers, setJobSeekers] = useState([]);

  useEffect(() => {
    const employeeFetch = async () => {
      try {
        const response = await fetch(`http://localhost:3000/job_seekers`);
        const data = await response.json();
        setJobSeekers(data);
        console.log(jobseekers);
      } catch (error) {
        console.log("fetch songs error", error);
      }
    };
    employeeFetch();
  });

  return (
    <div className="container">
      <div className="row row-cols-auto">
        <DeleteEmployeeCard />
        <DeleteEmployeeCard />
        <DeleteEmployeeCard />
        <DeleteEmployeeCard />
      </div>
    </div>
  );
}
export default Jobseekers;
