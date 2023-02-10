import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    // DO YOUR DUE DILIGENCE HERE: check email format, and maybe password length
    login(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
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
        <button onClick={handleRegister}>Login</button>
      </div>
      <Link to="/register">New here? go to Register</Link>
    </div>
  );
}

export default Login;
