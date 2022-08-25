import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import girlReviewImg from "../../images/ladyreview.jpg"

function Employers() {
  return ( 
    <div className="container">
      <div className="row">
        <div className="col-md-3">
     
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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Delete User</Button>{' '}
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>

  );
};
export default Employers;