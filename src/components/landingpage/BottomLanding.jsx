import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import girlReviewImg from "../../images/ladyreview.jpg";

const BottomLanding = () => {
  return (
    <div className="container">
      <h2 className="fw-bold text-black text-center mb-3">
        What jobseekers say <br /> about us
      </h2>
      <div className="d-lg-flex">
        <Card className="p-3 text-center shadow mx-auto mb-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={girlReviewImg}
            className="rounded-circle mx-auto"
            style={{ width: "6rem" }}
          />
          <Card.Body>
            <Card.Text>
              As recent graduate, Hired supported me in getting started with my career. I got
              employed two months after my graduation!
            </Card.Text>
            <Card.Text className="fw-semibold text-black mb-0">Karen</Card.Text>
            <Card.Text>UI/UX Designer</Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3 text-center shadow mx-auto mb-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={girlReviewImg}
            className="rounded-circle mx-auto"
            style={{ width: "6rem" }}
          />
          <Card.Body>
            <Card.Text>
              As recent graduate, Hired supported me in getting started with my career. I got
              employed two months after my graduation!
            </Card.Text>
            <Card.Text className="fw-semibold text-black mb-0">Karen</Card.Text>
            <Card.Text>UI/UX Designer</Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3 text-center shadow mx-auto mb-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={girlReviewImg}
            className="rounded-circle mx-auto"
            style={{ width: "6rem" }}
          />
          <Card.Body>
            <Card.Text>
              As recent graduate, Hired supported me in getting started with my career. I got
              employed two months after my graduation!
            </Card.Text>
            <Card.Text className="fw-semibold text-black mb-0">Karen</Card.Text>
            <Card.Text>UI/UX Designer</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div
        className="container rounded-3 text-center p-3 "
        style={{ backgroundColor: "#0B223A", maxWidth: "800px" }}
      >
        <p className="text-white fw-bold fs-2">
          Don’t miss out. Join the fastest growing career community in Africa.
        </p>
        <Button className="px-5 fw-bold">Signup for free</Button>
      </div>
    </div>
  );
};

export default BottomLanding;
