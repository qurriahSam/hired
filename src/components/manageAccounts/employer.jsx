import React from "react";
import DeleteEmployerCard from "./DeleteEmployerCard";

function Employers() {
  return (
    <div className="container">
      <div className="row row-cols-auto">
        <DeleteEmployerCard />
        <DeleteEmployerCard />
        <DeleteEmployerCard />
        <DeleteEmployerCard />
      </div>
    </div>
  );
}
export default Employers;
