import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import JobseekerCard from "./JobseekerCard";

function Dashboard() {
  const [jobseekers, setJobSeekers] = useState([]);
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };
  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  useEffect(() => {
    const employeeFetch = async () => {
      try {
        const response = await fetch(`https://hired-app-api.herokuapp.com/job_seekers`);
        const data = await response.json();
        setJobSeekers(data);
      } catch (error) {
        console.log("fetch jobseekers error", error);
      }
    };
    employeeFetch();
  }, []);

  const randCareer = () => {
    const careers = ["Cloud Developer", "UI/UX Designer", "Software Developer"];
    const years = ["1", "2", "3", "4", "5"];
    const randomc = Math.floor(Math.random() * careers.length);
    const randomy = Math.floor(Math.random() * years.length);
    return { role: careers[randomc], experience: years[randomy] };
  };

  const displayJobseekers = jobseekers
    .map((jobseeker) => {
      const career = randCareer();
      return { ...jobseeker, ...career };
    })
    .filter((jobseeker) => {
      if (profession === "") {
        return jobseeker;
      } else if (jobseeker.role === profession) {
        return jobseeker;
      }
    })
    .filter((jobseeker) => {
      if (experience === "") {
        return jobseeker;
      } else if (jobseeker.experience === experience) {
        console.log(jobseeker);
        return jobseeker;
      }
    })
    .map((jobseeker) => {
      console.log(jobseeker);
      return <JobseekerCard key={jobseeker.id} jobseeker={jobseeker} />;
    });

  return (
    <>
      <div className="container mt-3 d-lg-flex">
        <div className="mb-3 mx-auto p-3" style={{ maxWidth: "30em", minWidth: "15em" }}>
          <Form.Select aria-label="Proffession" onChange={handleProfessionChange}>
            <option value="">Proffession</option>
            <option value="Software Developer">Software Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Cloud Developer">Cloud Developer</option>
          </Form.Select>
          <Form.Select aria-label="Experience" className="mt-3" onChange={handleExperienceChange}>
            <option value="">Experience</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
          </Form.Select>
        </div>
        <div className="row row-cols-auto">{displayJobseekers}</div>
      </div>
    </>
  );
}
export default Dashboard;
