import React, { useState } from "react";
import withHigherOrderComponent from "./withHigherOrderComponent";

function HoverCounter(props) {
  console.log("props", props);
  const { counter, increaseCounter, backgroundColor } = props;

  return (
    <div>
      <h1>{counter}</h1>
      <button onMouseOver={increaseCounter} style={{ backgroundColor }}>
        Hover to increase
      </button>
    </div>
  );
}

export default withHigherOrderComponent(HoverCounter, 8);
