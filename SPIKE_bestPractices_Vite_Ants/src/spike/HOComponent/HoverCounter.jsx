import React, { useState } from "react";
import withHigerOrderCounter from "./withHigherOrderCounter";

function HoverCounter({ counter, increaseCounter, hoverMessage }) {
  return (
    <div>
      <h1>{counter}</h1>
      <button onMouseOver={increaseCounter}>{hoverMessage}</button>
    </div>
  );
}

export default withHigerOrderCounter(HoverCounter, 10);
