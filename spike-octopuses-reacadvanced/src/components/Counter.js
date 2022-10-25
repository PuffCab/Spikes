import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("component rendered");
  //   let count = 0;

  const increment = () => {
    setCount(count + 1);
    // count = count + 1;
    // console.log("count :>> ", count);
  };
  const decrement = () => {
    setCount(count - 1);
    // count = count + 1; do not update State variables like this
  };

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
