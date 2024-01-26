import React, { useRef, useState } from "react";

function NoNeededState() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const email = useRef();
  const password = useRef();

  const login = (e) => {
    e.preventDefault();
    console.log(
      "email: ",
      email.current.value,
      " --- ",
      "password: ",
      password.current.value
    );
  };

  return (
    <div>
      <h2>
        Don't You(Forget About <s>State</s>Me), by Simple Minds{" "}
      </h2>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          ref={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
          ref={password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NoNeededState;
