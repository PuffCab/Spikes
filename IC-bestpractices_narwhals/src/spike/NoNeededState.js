import React, { useRef, useState } from "react";

function NoNeededState() {
  console.log("component re-rendered");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const email = useRef();
  const password = useRef();
  const submit = (e) => {
    e.preventDefault();
    console.log(email.current.value, password.current.value);
  };

  return (
    <div>
      <h2>NoNeededState</h2>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          // value={email}
          ref={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          // value={password}
          ref={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NoNeededState;
