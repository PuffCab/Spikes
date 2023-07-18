import React, { useState } from "react";
import withHigherOrderComponent from "./withHigherOrderComponent";

function ClickCounter(props) {
  console.log("params", props);
  const { counter, increaseCounter } = props;

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Click to increase</button>
    </div>
  );
}

export default withHigherOrderComponent(ClickCounter, 3);
