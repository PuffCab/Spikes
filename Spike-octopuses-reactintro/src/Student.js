import React from "react";
import Button from "react-bootstrap/Button";
import Button2 from "@mui/material/Button";

function Student({ octopus, something, getNumber }) {
  //   console.log("prop", prop);

  //   const student = prop.octopus;
  //   const { octopus } = prop;

  const studentsNumber = 6;

  return (
    <div>
      {/* <p>{octopus }</p> */}
      <p>{octopus}</p>
      <p>{something}</p>
      <button onClick={() => getNumber(studentsNumber)}>get Number</button>
      <Button variant="primary">Bootstrap btn</Button>
      <Button2 variant="outlined">Material UI btn</Button2>
    </div>
  );
}

export default Student;
