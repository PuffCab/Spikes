import React, { useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };

  const increaseDelayed = () => {
    setTimeout(() => {
      // setCount(count + 5);
      setCount((prev) => {
        return prev + 5;
      });
    }, 2000);
  };

  return (
    <div>
      <h3>Function At The Junction, by Shorty Long</h3>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase +1 </button>
      <button onClick={increaseDelayed}>Increase +5 </button>
    </div>
  );
}

export default FunctionalUpdate;
