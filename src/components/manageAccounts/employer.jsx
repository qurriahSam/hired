import React, { useEffect, useState } from "react";
import DeleteEmployerCard from "./DeleteEmployerCard";

function Employers() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const employerFetch = async () => {
      try {
        const response = await fetch(`https://hired-app-api.herokuapp.com/employers`);
        const data = await response.json();
        setEmployers(data);
      } catch (error) {
        console.log("fetch employers error", error);
      }
    };
    employerFetch();
  }, []);

  const handleDelete = (id) => {
    const updatedEmployers = employers.filter((employer) => employer.id !== id);
    setEmployers(updatedEmployers);
  };

  const deleteUser = (id) => {
    fetch(`https://hired-app-api.herokuapp.com/employers/${id}`, { method: "DELETE" }).then(() => {
      handleDelete(id);
    });
  };

  const displayEmployers = employers.map((employer) => (
    <DeleteEmployerCard key={employer.id} employer={employer} deleteUser={deleteUser} />
  ));

  return (
    <div className="container">
      <div className="row row-cols-auto">{displayEmployers}</div>
    </div>
  );
}
export default Employers;
