import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import girlReviewImg from "../../images/ladyreview.jpg"

function Jobseekers() {
  return ( 
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <div className="d-md-flex">
     
    <Card className="mt-12 p-3 text-right " style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={girlReviewImg}
      className="rounded mx-auto"
      style={{ width: "6rem" }}
      />
      <Card.Body>
        <Card.Title>Jobseeker Name</Card.Title>
        <Card.Text>
          Email@gmail.com
          Position:
          Employment status:

        </Card.Text>
        <Button variant="danger">Delete User</Button>{' '}
      </Card.Body>
    </Card>
    
    <Card className="mt-12 p-3 text-right shadow mx-auto mb-12 mx-md-3" style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={girlReviewImg}
      className="rounded mx-auto"
      style={{ width: "6rem" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Email@gmail.com
          Position:
          Employment status:
        </Card.Text>
        <Button variant="danger">Delete User</Button>{' '}
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>
    
    </>
  );
};
export default Jobseekers;