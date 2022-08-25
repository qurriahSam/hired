import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const ApproveFileContainer = () => {
  return (
    <Card className="shadow-sm mx-auto mb-3">
      <Card.Body className="d-md-flex justify-content-between">
        <Card.Text className="fw-semibold text-black mb-0"></Card.Text>
        <Card.Text className="fw-semibold mb-0">JobSeekerName</Card.Text>
        <Card.Text className="fw-semibold my-1 my-md-0">Email@gmail</Card.Text>
        <div className="d-flex">
          <FontAwesomeIcon icon={faFolder} className="mt-1" color="gray" />
          <Card.Text className="fw-semibold mb-0">Resume</Card.Text>
        </div>
        <div className="d-flex mt-1 justify-content-end me-3">
          <FontAwesomeIcon icon={faCheck} color="green" style={{ cursor: "pointer" }} size="lg" />
          <FontAwesomeIcon
            icon={faXmark}
            className="ms-4"
            color="red"
            style={{ cursor: "pointer" }}
            size="lg"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ApproveFileContainer;
