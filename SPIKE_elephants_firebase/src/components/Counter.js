import React, { useState } from "react";

function Counter() {
  console.log("component rendered");
  let number = 10;
  const [myNumber, setMyNumber] = useState(1);
  function increaseNumber() {
    // myNumber++;
    setMyNumber(myNumber + 1);
  }
  return (
    <div>
      <button onClick={increaseNumber}>Count: {myNumber}</button>
    </div>
  );
}

export default Counter;
