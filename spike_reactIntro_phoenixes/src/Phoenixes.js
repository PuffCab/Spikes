import React from "react";
import Student from "./Student";

function Phoenixes() {
  const phoenixes = [
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

  const projectName = "React";

  const getColor = (color) => {
    console.log("color", color);
  };

  // We can send props from PARENT to CHILDREN using, props ... (pair of key and value)
  return (
    <div>
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
