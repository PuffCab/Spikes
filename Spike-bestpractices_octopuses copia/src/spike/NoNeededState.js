import React, { useRef, useState } from "react";

function NoNeededState() {
  console.log("component Run");

  const email = useRef();
  const password = useRef();
  const submit = (e) => {
    e.preventDefault();
    email.current.value = "";
    console.log(
      "email, password :>> ",
      email.current.value,
      password.current.value
    );
  };
  return (
    <div>
      <h2>Don't You(Forget About Me), by Simple Minds </h2>
      <form onSubmit={submit}>
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
