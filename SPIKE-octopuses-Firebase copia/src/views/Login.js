import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    // console.log("email", e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    // console.log("password", e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    login(email, password);
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="email">email</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <label htmlFor="password">password</label>
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">No account? register first</Link>
    </div>
  );
}

export default Login;
