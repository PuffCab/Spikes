import React, { useState } from "react";

function FunctionalUpdate() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count + 1);
    setCount((prev) => {
      return prev + 1;
    });
  };
  const delayedCount = () => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 2;
      });
    }, 3000);
  };

  return (
    <div>
      <h3>Function At The Junction, by Shorty Long</h3>
      <h3>{count}</h3>
      <button onClick={increaseCount}>count + 1</button>
      <button onClick={delayedCount}>delayed count</button>
    </div>
  );
}

export default FunctionalUpdate;
