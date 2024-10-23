import React, { useState } from "react";

function Counter() {
  console.log("%c Component Rendered", "color:green");
  // let number = 0;
  //   const number = useState(0);
  const initialNumber = 2;
  const [number, setNumber] = useState(initialNumber);
  console.log("number", number);

  const increaseCounter = () => {
    //   number++;
    setNumber(number + 1);
    console.log("number", number);
  };
  return (
    <div>
      {console.log("%c JSX rendered", "color:orange")}
      <h1>{number}</h1>
      <button
        onClick={() => {
          increaseCounter();
          alert("hey");
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
