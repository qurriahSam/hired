import React from "react";
import Image from "react-bootstrap/Image";
import coverGuy from "../../images/bgbwbg3.png";
import SignupEmployer from "./SignupEmployer";
import SignupJobseeker from "./SignupJobseeker";

function SignUp() {
  const [selected, setSelected] = React.useState(true);
  const handleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div
      className="container mt-5 pt-3 d-md-flex justify-content-around"
      style={{ maxHeight: "90vh" }}
    >
      <div className="d-none d-md-block">
        <Image src={coverGuy} alt="cover" fluid className="mh-100" />
      </div>
      <div style={{ minWidth: "300px" }}>
        <h2 className="fw-bold">Signup</h2>
        <div className="d-flex fw-bold fs-5">
          <p
            style={{ cursor: "pointer", color: selected ? "blue" : "black" }}
            onClick={handleSelected}
          >
            Jobseeker
          </p>
          <span className="fw-bold px-2">|</span>
          <p
            style={{ cursor: "pointer", color: selected ? "black" : "blue" }}
            onClick={handleSelected}
          >
            Employer
          </p>
        </div>
        {selected ? <SignupJobseeker /> : <SignupEmployer />}
      </div>
    </div>
  );
}

export default SignUp;
