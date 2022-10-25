import React from "react";

function Student({ octopus, getNumber }) {
  const studentsNumber = 6;

  return (
    <div>
      <p>{octopus}</p>
      {/* <button onClick={() => getNumber(studentsNumber)}>get Number</button> */}
    </div>
  );
}

export default Student;
