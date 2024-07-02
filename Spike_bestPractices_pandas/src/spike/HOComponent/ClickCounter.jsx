import React, { useState } from "react";
import withHigherOrderComponent from "./withHigherOrderComponent";

function ClickCounter(props) {
  console.log("props click :>> ", props);
  return (
    <div>
      <h1>{props.counter}</h1>
      <h3>{props.text}</h3>
      <button onClick={props.increaseCounter}>Click to increase</button>
    </div>
  );
}

export default withHigherOrderComponent(ClickCounter, 50);
