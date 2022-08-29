import React, { useEffect, useState } from "react";
import Students from "./Students";

function Component() {
  // JS code goes here

  const narwhals = [
    "jan",
    "philipp",
    "emiliy",
    "alberto",
    "karolina",
    "alberto",
  ];
  const [students, setStudents] = useState(narwhals);
  const [input, setInput] = useState("");
  const [greet, setGreet] = useState("hi");
  console.log("component run");
  const updateGreet = () => {
    setTimeout(() => {
      setGreet("howdy");
    }, 2000);
  };

  const getInfo = (info) => {
    console.log("info :>> ", info);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log("input", input);
  };
  const addStudent = () => {
    // students.push(input); // we do not do this. This is updating/mutating a state directly, and it is not a good react practise
    setStudents([...students, input]);
  };

  useEffect(() => {
    updateGreet();
    console.log("useEffect run");
  }, []);

  return (
    //JSX
    <>
      {/* {console.log(students)} */}
      <p>{greet}</p>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addStudent}>add Student</button>
      {students.map((narwhal, i) => {
        return (
          <Students
            narwhal={narwhal}
            info={"such a great day"}
            getInfo={getInfo}
            key={i}
          />
        );
      })}
    </>
  );
}

export default Component;
