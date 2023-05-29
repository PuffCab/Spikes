import React, { useEffect, useState } from "react";
import Student from "./Student";

function Phoenixes() {
  console.log("%ccomponent run", "color:red");
  const initialList = [
    "Alireza",
    "Sonja",
    "Martha",
    "Melissa",
    "Sabir",
    "Phuoc",
    "Mila",
    "Phuoc",
    "Carl",
  ];
  const [phoenixes, setPhoenixes] = useState(initialList);
  const [inputText, setInputText] = useState("");
  const [greet, setGreet] = useState("hey");

  const projectName = "React";

  const updateGreet = () => {
    setGreet("Hodwy!!");
  };

  const getColor = (color) => {
    console.log("color", color);
  };

  const onInputChangeHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
    // console.log("inputText", inputText);
  };

  const addStudent = () => {
    initialList.push(inputText);
    setPhoenixes(initialList);
    console.log("phoenixes", phoenixes);
  };

  useEffect(() => {
    console.log("%cuseEffect run", "color:green");
    updateGreet();
  }, [phoenixes]);

  return (
    <div>
      <h3>{greet}</h3>
      <div>
        <input type="text" value={inputText} onChange={onInputChangeHandler} />
        <button onClick={addStudent}>Add student</button>
      </div>
      {/* {console.log("inputText in JSX", inputText)} */}
      <h2>The Phonixes are :</h2>
      {phoenixes.map((phoenix, index) => {
        return (
          <Student
            key={index}
            phoenix={phoenix}
            projectName={projectName}
            getColor={getColor}
          />
        );
      })}
    </div>
  );
}

export default Phoenixes;
