import React, { useState } from "react";

function FunctionalUpdate() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    // setNumber(number + 1);
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const delayedIncrease = () => {
    setTimeout(() => {
      // setNumber(number + 3);
      setNumber((prev) => {
        return prev + 3;
      });
    }, 3000);
  };
  return (
    <div>
      <h3>Function At The Junction, by Shorty Long</h3>
      <h1>{number}</h1>
      <button onClick={increase}>increase +1</button>
      <button onClick={delayedIncrease}>delayed increase +3</button>
    </div>
  );
}

export default FunctionalUpdate;
