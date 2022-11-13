import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
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

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <Link to="/login">Do you have an account, go to login</Link>
    </div>
  );
}

export default Register;
