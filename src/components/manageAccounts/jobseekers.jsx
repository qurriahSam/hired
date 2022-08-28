import React from "react";
import DeleteEmployeeCard from "./DeleteEmployeeCard";

function Jobseekers() {
  return (
    <div className="container">
      <div class="row row-cols-auto">
        <DeleteEmployeeCard />
        <DeleteEmployeeCard />
        <DeleteEmployeeCard />
        <DeleteEmployeeCard />
      </div>
    </div>
  );
}
export default Jobseekers;
