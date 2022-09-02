import React, { useEffect, useState } from "react";
import DeleteEmployeeCard from "./DeleteEmployeeCard";

function Jobseekers() {
  const [jobseekers, setJobSeekers] = useState([]);

  useEffect(() => {
    const employeeFetch = async () => {
      try {
        const response = await fetch(`https://hired-app-api.herokuapp.com/job_seekers`);
        const data = await response.json();
        setJobSeekers(data);
      } catch (error) {
        console.log("fetch songs error", error);
      }
    };
    employeeFetch();
  }, []);

  const handleDelete = (id) => {
    const updatedJobSeekers = jobseekers.filter((jobseeker) => jobseeker.id !== id);
    setJobSeekers(updatedJobSeekers);
  };

  const deleteUser = (id) => {
    fetch(`https://hired-app-api.herokuapp.com/job_seekers/${id}`, { method: "DELETE" }).then(
      () => {
        handleDelete(id);
      }
    );
  };

  const displayJobseekers = jobseekers.map((jobseeker) => (
    <DeleteEmployeeCard key={jobseeker.id} jobseeker={jobseeker} deleteUser={deleteUser} />
  ));

  return (
    <div className="container">
      <div className="row row-cols-auto">{displayJobseekers}</div>
    </div>
  );
}
export default Jobseekers;
