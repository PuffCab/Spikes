import React, { useRef, useState } from "react";

function NoNeededState() {
  console.log("%c component re-rendered ", "color:red");

  const email = useRef();
  const password = useRef();

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("email :>> ", email);
    alert(
      `you logged in with ${email.current.value} and ${password.current.value} `
    );
  };

  return (
    <div>
      <h2>
        Don't You(Forget About <s>State</s>Me), by Simple Minds{" "}
      </h2>
      <form onSubmit={submitLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={email} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NoNeededState;
