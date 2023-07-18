import React, { useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);

  const increase = () => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };

  const increaseDelayed = () => {
    setTimeout(() => {
      // setCount(count + 2);
      setCount((prev) => {
        return prev + 2;
      });
    }, 2000);
  };

  return (
    <div>
      <h3>useState Functional update</h3>
      <h4>{count}</h4>
      <button onClick={increase}>increase +1</button>
      <button onClick={increaseDelayed}>increase +2 delayed</button>
    </div>
  );
}

export default FunctionalUpdate;
