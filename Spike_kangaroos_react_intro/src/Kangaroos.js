import React from "react";
import { Student } from "./Student";

function Kangaroos() {
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
    "Heron",
  ];

  const getFavColor = (color) => {
    console.log("favColor", color);
  };

  return (
    <div>
      <h1>Kangaroos</h1>
      {kangaroos.map((kangaroo, index) => {
        return (
          <Student
            kangaroo={kangaroo}
            randomNumber={23}
            getFavColor={getFavColor}
          />
        );
      })}
    </div>
  );
}

export default Kangaroos;
