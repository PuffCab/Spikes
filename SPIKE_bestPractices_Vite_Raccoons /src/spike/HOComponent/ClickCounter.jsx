import React, { useState } from "react";
import withHigherOrderComponet from "./withHigherOrderComponet";

function ClickCounter({
  counter,
  increaseCounter,
  clickMessage,
  PasswordInput,
  UserNameInput,
}) {
  return (
    <div>
      <h1>{counter}</h1>
      <h2>{clickMessage}</h2>
      <PasswordInput placeholder="pasword" />
      <UserNameInput placeholder="user name" />
      <button onClick={increaseCounter}>Click to increase</button>
    </div>
  );
}

export default withHigherOrderComponet(ClickCounter, 10);
