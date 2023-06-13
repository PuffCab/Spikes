import React, { useRef, useState } from "react";

function NoNeededState() {
  console.log("component run");

  const emailRef = useRef();
  const passwordRef = useRef();
  console.log("emailRef", emailRef);
  const login = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div>
      <h2>
        Don't You(Forget About <s>State</s>Me), by Simple Minds{" "}
      </h2>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={passwordRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NoNeededState;
