import React, { useState } from "react";
import withHigherOrderComponent from "./withHigherOrderComponent";

function HoverCounter(props) {
  console.log("props hover :>> ", props);
  return (
    <div>
      <h1>{props.counter}</h1>
      <h3>{props.text}</h3>
      <button onMouseOver={props.increaseCounter}>Hover to increase</button>
    </div>
  );
}

export default withHigherOrderComponent(HoverCounter, 2);
