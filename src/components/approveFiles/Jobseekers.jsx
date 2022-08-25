//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import React from "react";
//import { Container, Navbar } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";


function JobSeekers() {
  return (
    <Card className="p-3 shadow mx-auto" style={{ width: "70rem", marginTop: "7em", height:"5rem"}}>
            <Card.Body className="d-flex justify-content-around" >
              
              <Card.Text className="fw-semibold text-black mb-0" ></Card.Text>
              <Card.Text className="fw-semibold text-secondary fs-5">JobSeekerName</Card.Text>
              <Card.Text className="fw-semibold text-secondary fs-5">Email@gmail</Card.Text>
              <div className="d-flex">
              <FontAwesomeIcon icon={faFolder} className="mt-1" color="gray" fontSize={20} spacing2={20} />
              <Card.Text className="fw-semibold text-secondary fs-5">Resume</Card.Text>
              </div>
              <FontAwesomeIcon icon={faCheck} className="mt-1" color="green" fontSize={30} />
              <FontAwesomeIcon icon={faXmark} className="mt-1" color="red" fontSize={30} />
              
            </Card.Body>
          </Card>
  
  )
}


export default JobSeekers;