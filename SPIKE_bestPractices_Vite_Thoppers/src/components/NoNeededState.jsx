import React, { useRef, useState } from "react";

function NoNeededState() {
  console.log("component run");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log("emailref :>> ", emailRef);
  const submit = (e) => {
    e.preventDefault();
    console.log("emailref :>> ", emailRef.current.value);
  };

  return (
    <div>
      <h2>NoNeededState</h2>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NoNeededState;
