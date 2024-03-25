import React, { useState } from "react";

function FunctionalUpdate() {
  //! IMPORTANT whenever you need to update a state based on the previous value of that state, use the functional set of state
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
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
      <h3>Function At The Junction, by Shorty Long</h3>
      <h1>{count}</h1>
      <button onClick={increase}>Increase +1</button>
      <button onClick={increaseDelayed}>Increase delayed +2</button>
    </div>
  );
}

export default FunctionalUpdate;
