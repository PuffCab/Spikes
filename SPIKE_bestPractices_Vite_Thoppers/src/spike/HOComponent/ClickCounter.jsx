import React, { useState } from "react";
import withHigerOrderComponent from "./withHigherOrderComponent";

function ClickCounter({ counter, increaseCounter, clickText }) {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>{clickText}</button>
    </div>
  );
}

export default withHigerOrderComponent(ClickCounter, 10);
