import React, { useState } from "react";

function Counter() {
  let [number, setNumber] = useState(5);

  const incrementCount = () => {
    // number = number + 1; // DO NOT DO THIS
    setNumber(number + 1);
    console.log("number :>> ", number);
  };
  const decrementCount = () => {
    setNumber(number - 1);
    console.log("number :>> ", number);
  };
  return (
    <div>
      {console.log("number in JSX ", number)}
      <h2>Counter</h2>
      <button onClick={incrementCount}>+</button>
      <span>{number}</span>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Counter;
