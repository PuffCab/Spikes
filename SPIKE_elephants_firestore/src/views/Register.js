import { registerVersion } from "firebase/app";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    register(email, password);
  };

  return (
    <div>
      <h1>Register</h1>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleEmailChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
        />
        <label htmlFor="password">password</label>
        <button onClick={handleRegister}>Register</button>
      </div>
      <Link to="/login">Do you have an account? go to Login</Link>
    </div>
  );
}

export default Register;
