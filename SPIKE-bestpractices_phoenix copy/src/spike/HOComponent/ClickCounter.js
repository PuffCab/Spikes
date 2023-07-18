import React, { useState } from "react";

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((current) => {
      return current + 1;
    });
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Click to increase</button>
    </div>
  );
}

export default ClickCounter;
