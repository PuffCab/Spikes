import React, { useState } from "react";
import withHigerOrderCounter from "./withHigherOrderCounter";

function ClickCounter({ counter, increaseCounter, clickMessage }) {
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>{clickMessage}</button>
    </div>
  );
}

export default withHigerOrderCounter(ClickCounter, 5);
