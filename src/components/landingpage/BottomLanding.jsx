import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import girlReviewImg from "../../images/ladyreview.jpg";

const BottomLanding = () => {
  const blueCol = { color: "rgb(12, 110, 253)" };
  return (
    <div className="container">
      <h2 className="fw-bold text-black text-center mb-3">
        What jobseekers say <br /> about us
      </h2>
      <div className="d-lg-flex my-lg-5">
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
        <Card className="p-3 text-center shadow mx-auto mb-5 mb-md-3" style={{ width: "18rem" }}>
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
        className="container rounded-3 text-center p-3 mb-3 py-md-5"
        style={{ backgroundColor: "#0B223A", maxWidth: "800px" }}
      >
        <p className="text-white fw-bold fs-2 pb-md-3">
          Don’t miss out. Join the fastest growing career community in Africa.
        </p>
        <Button className="px-5 fw-bold">Signup for free</Button>
      </div>
      <div className="d-md-flex mt-md-5 justify-content-around">
        <div style={{ width: "300px" }}>
          <p className="fw-bold fs-4">
            Hired<span style={blueCol}>.</span>
          </p>
          <p>We are helping employers find suitable candidates using our platform</p>
        </div>
        <div style={{ width: "300px" }}>
          <p className="fw-bold"> Support</p>
          <ul className="list-unstyled">
            <li>Frequently Asked Questions</li>
            <li>Service Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div style={{ width: "300px" }}>
          <p className="fw-bold">Contact Us</p>
          <ul className="list-unstyled">
            <li>
              <FontAwesomeIcon icon={faSquarePhone} style={blueCol} size="lg" />
              <span className="ps-2">+254123456</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} style={blueCol} size="lg" />
              <span className="ps-2">hired@hr.hired.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomLanding;
