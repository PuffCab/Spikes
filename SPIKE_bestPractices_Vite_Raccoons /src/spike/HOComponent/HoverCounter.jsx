import React, { useState } from "react";
import withHigherOrderComponet from "./withHigherOrderComponet";

function HoverCounter({ counter, increaseCounter, hoverMessage, EmailInput }) {
  return (
    <div>
      <h1>{counter}</h1>
      <h2>{hoverMessage}</h2>
      <EmailInput placeholder="email" />
      <button onMouseOver={increaseCounter}>Hover to increase</button>
    </div>
  );
}

export default withHigherOrderComponet(HoverCounter, 200);
