import React from "react";
import Form from "react-bootstrap/Form";
import JobseekerCard from "./JobseekerCard";

function Dashboard() {
  return (
    <>
      <div className="container mt-3 d-lg-flex">
        <div className="mb-3 mx-auto p-3" style={{ maxWidth: "30em", minWidth: "15em" }}>
          <Form.Select aria-label="Proffession">
            <option value="all">Proffession</option>
            <option value="software developer">Software Developer</option>
            <option value="ui designer">UI/UX Designer</option>
            <option value="cloud developer">Cloud Developer</option>
          </Form.Select>
          <Form.Select aria-label="Experience" className="mt-3">
            <option value="all">Experience</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
          </Form.Select>
        </div>
        <div class="row row-cols-auto">
          <JobseekerCard />
          <JobseekerCard />
          <JobseekerCard />
          <JobseekerCard />
          <JobseekerCard />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
