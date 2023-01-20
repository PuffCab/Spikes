import Student from "./Student";
import "../style/myStyle.css";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function MyComponent(params) {
  // HERe we write pure JS

  console.log("this is React");

  const greet = "Happy New year";
  const secondGreet = "Good Morning";

  const timeOfDay = "Morning";

  //   const elephants = [
  //     "Can",
  //     "Ercan",
  //     "Juli",
  //     "olja",
  //     "Santiago",
  //     "Monique",
  //     "Roxanne",
  //     "Santiago",
  //   ];

  //   console.log(useState("this is a hook"));
  const [students, setStudents] = useState([
    "Can",
    "Ercan",
    "Juli",
    "olja",
    "Santiago",
    "Monique",
    "Roxanne",
    "Santiago",
  ]);
  const [input, setInput] = useState("");
  const getNumber = (number) => {
    console.log("number", number);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
    console.log("input :>> ", input);
  };
  const addStudent = () => {
    setStudents([...students, input]);
  };

  //   function addNewStudent(params) {
  //     console.log("function run");
  //     setStudents([...students, "Raul"]);
  //   }
  //   setStudents([...students, "Raul"]); // DO NOT DO THIS!
  //   addNewStudent();

  return (
    // React Fragment <>
    <>
      {students.map((elephant, index) => {
        return (
          <div key={index}>
            <Student elephant={elephant} getNumber={getNumber} />
          </div>
        );
      })}
      <input type="text" onChange={onInputChange} value={input} />
      <button onClick={addStudent}>Add Student</button>
      {console.log("input in JSX", input)}
    </>
  );
}

export default MyComponent;
