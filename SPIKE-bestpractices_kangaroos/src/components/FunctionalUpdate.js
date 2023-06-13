import React, { useEffect, useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);
  const increase = () => {
    // setCount(count + 1);
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };
  const increaseDelayed = () => {
    setTimeout(() => {
      // setCount(count + 2);
      setCount((prevValue) => {
        return prevValue + 2;
      });
    }, 3000);
  };
  return (
    <div>
      <h3>Function At The Junction, by Shorty Long</h3>
      <h1>{count}</h1>
      <div>
        <button onClick={increase}>increase</button>
        <button onClick={increaseDelayed}>increase +2 after 1 second</button>
      </div>
    </div>
  );
}

export default FunctionalUpdate;
