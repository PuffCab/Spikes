import React, { useState } from "react";

function Counter() {
  let initialNumber = 1;

  console.log("useState(", useState("word"));
  //   const [count, setCount] = useState(initialNumber);
  let [count, setCount] = useState("");

  function increaseCount() {
    // console.log("click");
    //   count = count + 1;
    setCount(count + 1);
    // console.log(count);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Counter;
