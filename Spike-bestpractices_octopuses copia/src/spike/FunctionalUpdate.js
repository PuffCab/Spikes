import React, { useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);
  const increment = () => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };
  const incrementDelayed = () => {
    setTimeout(() => {
      // setCount(count + 2);
      setCount((prev) => {
        return prev + 2;
      });
    }, 2000);
  };

  return (
    <div>
      <h3>Function At The Junction, by Shorty Long</h3>
      <div>{count}</div>
      <button onClick={increment}>+ 1</button>
      <button onClick={incrementDelayed}>+ 2 delayed</button>
    </div>
  );
}

export default FunctionalUpdate;
