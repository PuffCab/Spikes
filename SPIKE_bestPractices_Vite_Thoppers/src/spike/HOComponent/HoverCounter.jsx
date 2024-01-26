import React, { useState } from "react";
import withHigerOrderComponent from "./withHigherOrderComponent";

function HoverCounter({ counter, increaseCounter, hoverText }) {
  // console.log(props);

  return (
    <div>
      <h1>{counter}</h1>
      <button onMouseOver={increaseCounter}>{hoverText}</button>
    </div>
  );
}

export default withHigerOrderComponent(HoverCounter, 100);
