import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import askme from "../../images/askwhatnobg2c.png";
import deskGuy from "../../images/guyoncomp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const blue = { color: "#1B77AD" };

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="mb-5">
      <div className="container mb-5">
        <div className="d-lg-flex flex-row-reverse">
          <div>
            <Image src={askme} alt="cover" fluid style={{ maxHeight: "95em" }} />
          </div>
          <div className="d-lg-flex flex-column justify-content-end">
            <h2 className="fw-bold py-2 mb-lg-3 fs-1 lh-base" style={{ maxWidth: "400px" }}>
              <span style={blue}>Helping</span> you <br className="d-none d-lg-block" /> find your{" "}
              <span style={blue}>dream</span> job is super <span style={blue}>easy</span>{" "}
              <br className="d-none d-lg-block" />
              now.
            </h2>
            <p className="mb-lg-5">
              Hired is designed to make it easy for you to find a job you’ll love! Our
              results-driven professionals can help job seekers like you find a job that aligns well
              with your skill set and career objectives.
            </p>
            <div className="mb-2 d-md-flex mb-lg-5">
              <Button className="px-4 px-md-5 fw-bold me-3" onClick={() => navigate("/signup")}>
                Find Work
              </Button>
              <Button
                variant="outline-dark"
                className="px-4 px-md-5 fw-bold"
                onClick={() => navigate("/signup")}
              >
                Hire Talent
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="fw-bold text-black text-center mb-4">Explore by Category</h2>
        <div className="d-md-flex my-lg-5">
          <Card className="p-3 shadow mx-auto mb-3" style={{ width: "15rem" }}>
            <Card.Body>
              <div
                className="text-center rounded-circle mb-2"
                style={{ width: "50px", height: "50px", backgroundColor: "#FFB800" }}
              >
                <FontAwesomeIcon icon={faPalette} className="mt-3" color="#fff" />
              </div>
              <Card.Text className="fw-semibold text-black mb-0">UI/UX Designer</Card.Text>
              <Card.Text className="fw-semibold text-secondary fs-6">200 Professionals</Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 shadow mx-auto mb-3 mx-md-3" style={{ width: "15rem" }}>
            <Card.Body>
              <div
                className="text-center rounded-circle mb-2"
                style={{ width: "50px", height: "50px", backgroundColor: "#2E88BC" }}
              >
                <FontAwesomeIcon icon={faCode} className="mt-3" color="#fff" />
              </div>
              <Card.Text className="fw-semibold text-black mb-0">Web Developer</Card.Text>
              <Card.Text className="fw-semibold text-secondary fs-6">173 Professionals</Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-3 shadow mx-auto mb-3" style={{ width: "15rem" }}>
            <Card.Body>
              <div
                className="text-center rounded-circle mb-2"
                style={{ width: "50px", height: "50px", backgroundColor: "#FF6647" }}
              >
                <FontAwesomeIcon icon={faDatabase} className="mt-3" color="#fff" />
              </div>
              <Card.Text className="fw-semibold text-black mb-0">Data Scientist</Card.Text>
              <Card.Text className="fw-semibold text-secondary fs-6">109 Professionals</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mb-5">
        <div className="d-lg-flex">
          <div>
            <Image src={deskGuy} alt="cover" fluid style={{ maxHeight: "80em" }} />
          </div>
          <div className="d-lg-flex flex-column justify-content-end">
            <h2 className="fw-bold py-2 mb-lg-3 fs-1 lh-base">
              Make a very good qualified profile
            </h2>
            <p className="mb-lg-5">
              Create an account so you can start building your profile and boost it. Enter all your
              experience and skill and get noticed by employers.
            </p>
            <div className="mb-2 mb-lg-5">
              <Button className="px-5 fw-bold me-3">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
