import React, { useRef, useState } from "react";

function NoNeededState() {
  console.log("component rendered again");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const email = useRef("");
  const password = useRef("");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(
      "email, password>>>",
      email.current.value,
      password.current.value
    );
  };

  return (
    <div>
      <h2>do we need a State?</h2>

      <form onSubmit={handleSubmitLogin}>
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
