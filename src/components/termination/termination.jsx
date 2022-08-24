import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import girlReviewImg from "../../images/ladyreview.jpg"

function Termination() {
    return ( 
      <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div className="d-md-flex">
          <Card className="mt-4 p-3 text-right mb-3 me-md-3 " style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={girlReviewImg}
      className="rounded mx-auto"
      style={{ width: "6rem" }}
      />
      <Card.Body>
        <Card.Title>Jobseeker Name</Card.Title>
        <Card.Text>
         <p>Email@gmail.com</p> 
         <p>Position:</p> 
          <p>Employment status:</p>

        </Card.Text>
        <Button variant="danger">Terminate</Button>{' '}
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>
    
    </>
  );
};
export default Termination;