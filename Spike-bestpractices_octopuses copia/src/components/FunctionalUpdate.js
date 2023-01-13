import React, { useEffect, useState } from "react";

function FunctionalUpdate() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const increaseDelayed = () => {
    setTimeout(() => {
      setNumber((currentNumber) => {
        return currentNumber + 2;
      });
    }, 2000);
  };

  return (
    <div>
      <h3>useState Functional Update</h3>
      <h4>{number}</h4>
      <button onClick={increase}>Increase</button>
      <button onClick={increaseDelayed}>Increase delayed</button>
    </div>
  );
}

export default FunctionalUpdate;
