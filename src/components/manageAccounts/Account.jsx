import React from 'react';
import Jobseekers from "./jobseekers";
import Employers from "./employer"

function ManageAccount() {
  const [selected, setSelected] = React.useState(true);
  const handleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div className="container mt-5 pt-3">
      <div className="d-none">
      
      </div>
      <div>
        <h2 className="fw-bold">Manage Account</h2>
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
        {selected ? <Jobseekers /> : <Employers />}
      </div>
    </div>
  );
}

export default ManageAccount;