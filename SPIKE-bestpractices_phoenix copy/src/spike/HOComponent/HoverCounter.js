import React, { useState } from "react";

function HoverCounter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((current) => {
      return current + 1;
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onMouseOver={increaseCounter}>Hover to increase</button>
    </div>
  );
}

export default HoverCounter;
