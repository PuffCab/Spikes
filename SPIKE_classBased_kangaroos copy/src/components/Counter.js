import React, { useEffect, useState } from "react";

function Counter() {
  console.log("%ccomponent run again", "color:green");
  let count = 2;

  // console.log("useState", useState(3));
  //   const [initialValue, changeValue] = useState(3);

  // STATE VARIABLE DECLARATION : useState hook
  const [number, setNumber] = useState(0);

  const increase = () => {
    // count++;
    //   console.log("count", count);
    setNumber(number + 1);
  };
  useEffect(() => {
    console.log("%cuseEffect run", "color:red");
  }, [number]);

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <h2>{count}</h2>
      <h2>number : {number}</h2>
    </div>
  );
}

export default Counter;
