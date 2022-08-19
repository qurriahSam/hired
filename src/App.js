import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="d-flex">
      <h1 className="text-capitalize text-decoration-underline fst-italic">hired</h1>
      <FontAwesomeIcon icon={faCoffee} className="p-3" />
    </div>
  );
}

export default App;
