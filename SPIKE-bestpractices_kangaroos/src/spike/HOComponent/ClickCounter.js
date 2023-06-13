import React, { useState } from "react";
import withHOC from "./withHOC";

function ClickCounter({ clicked, times, counter, increaseCounter }) {
  return (
    <div>
      <h1>
        {clicked} {counter} {times}
      </h1>
      <button onClick={increaseCounter}>Click to increase</button>
    </div>
  );
}

export default withHOC(ClickCounter, 200);
