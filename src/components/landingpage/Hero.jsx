import React from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import askme from "../../images/askwhatnobg2c.png";

const blue = { color: "#1B77AD" };

function Hero() {
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
              <Button className="px-4 px-md-5 fw-bold me-3">Find Work</Button>
              <Button variant="outline-dark" className="px-4 px-md-5 fw-bold">
                Hire Talent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
