import React from "react";
import Image from "react-bootstrap/Image";
import coverGuy from "../../images/bgbwbg3.png";
import Signup from "./Signup";

function SignUpOrIn() {
  return (
    <div className="container mt-5 pt-3">
      <div className="d-none">
        <Image src={coverGuy} alt="cover" fluid style={{ maxHeight: "95em" }} />
      </div>
      <div>
        <h2 className="fw-bold">Signup</h2>
        <div className="d-flex fw-bold fs-5">
          <p style={{ cursor: "pointer" }}>Jobseeker</p>
          <span className="fw-bold px-2">|</span>
          <p style={{ cursor: "pointer" }}>Employer</p>
        </div>
        <Signup />
      </div>
    </div>
  );
}

export default SignUpOrIn;
