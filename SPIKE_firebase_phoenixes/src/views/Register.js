import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    //!DO YOUR DUE DILIGENCE with email and password before sending it to firebase
    // console.log("email, passowrd", email, password);
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
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="password">Password</label>
        <button onClick={handleRegister}>Register</button>
      </div>
      <Link to={"/login"}>
        do you have an account already?, just login here
      </Link>
    </div>
  );
}

export default Register;
