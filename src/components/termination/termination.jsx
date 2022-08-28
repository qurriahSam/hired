import React from "react";
import EmployeeCard from "./EmployeeCard";

function Termination() {
  return (
    <>
      <div className="container mt-2">
        <div class="row row-cols-auto">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
      </div>
    </>
  );
}
export default Termination;
