import React, { useEffect, useState } from "react";
import { Student } from "./Student";

function Kangaroos() {
  console.log("c%component run again", "color:green");
  const kangaroos = [
    "Ari",
    "Milena",
    "Carl",
    "Pablo",
    "Christian",
    "Christian",
    "Doron",
    "Jessica",
    "Pranab",
  ];
  const [studentsList, setStudentsList] = useState(kangaroos);
  const [inputText, setInputText] = useState("");

  // const getFavColor = (color) => {
  //   console.log("favColor", color);
  // };

  const handleInputChange = (event) => {
    console.log("event.target.value", event.target.value);
    setInputText(event.target.value);

    console.log("inputText", inputText);
  };

  const addStudent = (event) => {
    console.log("inputText", inputText);
    setStudentsList([...studentsList, inputText]);
  };
  useEffect(() => {
    console.log("%cuninvited guest", "color:red");
    alert("i dont want this");
  }, []);

  return (
    <div>
      <h1>Kangaroos</h1>
      <input type="text" onChange={handleInputChange} value={inputText} />
      <button onClick={addStudent}>add student</button>
      {studentsList.map((kangaroo, index) => {
        return <Student key={index} kangaroo={kangaroo} randomNumber={23} />;
      })}
    </div>
  );
}

export default Kangaroos;
