import React from "react";
import Student from "./Student";
import "../src/style/myCss.css";

function Octopuses() {
  const octopuses = [
    "Sebastian",
    "Heron",
    "Dickson",
    "Silvia",
    "jacopo",
    "Viktor",
    "Viktor",
  ];

  const getNumber = (number) => {
    console.log("number :>> ", number);
  };

  return (
    <div>
      <h2 className="my-style">Octopuses</h2>
      <h2 className="coral">this is a component</h2>
      <p>The Octopuses cohort are </p>
      {octopuses.map((octopus, index) => {
        return (
          <div key={index}>
            <Student
              octopus={octopus}
              something="whatever"
              getNumber={getNumber}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Octopuses;
