import React, { useRef, useState } from "react";

function NoNeededState() {
  const email = useRef();
  const password = useRef();

  const login = (e) => {
    e.preventDefault();
    console.log("email :>> ", email);
    alert(
      `Email: ${email.current.value} and password ${password.current.value} submited`
    );
  };

  return (
    <div>
      <h2>
        Don't You(Forget About <s>State</s>Me), by Simple Minds{" "}
      </h2>
      <form onSubmit={login}>
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
