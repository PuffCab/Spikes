import React, { useEffect, useState } from "react";
import Student from "./Student";
import "../src/style/myCss.css";

function Octopuses() {
  console.log("%ccomponent Runt", "color:green");
  // const octopusesArray = [
  //   "Sebastian",
  //   "Heron",
  //   "Dickson",
  //   "Silvia",
  //   "jacopo",
  //   "Viktor",
  // ];
  const [octopuses, setOctopuses] = useState([
    "Sebastian",
    "Heron",
    "Dickson",
    "Silvia",
    "jacopo",
    "Viktor",
  ]);
  const [input, setInput] = useState("");

  const now = new Date().getSeconds();
  // console.log("now :>> ", now);
  const [date, setDate] = useState(now);

  const updateSeconds = () => {
    setDate(now);
  };

  const getNumber = (number) => {
    console.log("number :>> ", number);
  };

  useEffect(() => {
    console.log("%cuseEffect Run", "color:red");
    updateSeconds();
  }, [octopuses, input]);

  const getInput = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
    // console.log("input :>> ", input);
  };

  const addStudent = () => {
    // octopuses.push(input); // DO NOT DO THI
    setOctopuses([...octopuses, input]);
    console.log("octopuses", octopuses);
  };

  return (
    <div>
      {console.log("JSX Run")}
      <h2 className="my-style">Octopuses</h2>
      <p>Seconds : {date}</p>
      <input type="text" value={input} onChange={getInput} />
      <button onClick={addStudent}>add Student</button>
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
