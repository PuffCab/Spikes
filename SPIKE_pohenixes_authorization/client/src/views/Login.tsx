import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import checkUserStatus from "../utils/checkUserStatus";

type Props = {};

const Login = (props: Props) => {
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  });

  //This should probably belong to the context

  const [user, setUser] = useState<User | null>({
    userName: "",
    email: "",
    avatar: "",
  });
  const [error, setError] = useState<ResponseError>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myHeader = new Headers();
    myHeader.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials.email);
    urlencoded.append("password", loginCredentials.password);

    const requestOptions = {
      method: "POST",
      headers: myHeader,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/login",
        requestOptions
      );
      console.log("response", response);

      if (response.ok) {
        const result = (await response.json()) as FetchLoginResult;
        const { token, user, msg } = result;
        // Store the token
        if (token) {
          localStorage.setItem("token", token);
          setUser(result.user);
        }

        console.log("result", result);
      }
      if (!response.ok) {
        const result: FetchError = await response.json();
        setError(result.error);
      }
    } catch (error) {
      console.log("error during login", error);
    }

    // console.log("loginCredentials", loginCredentials);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  useEffect(() => {
    checkUserStatus();
  }, [user]);

  return (
    <div>
      <h1>Login</h1>
      {error && <h2>{error}</h2>}
      <button style={{ backgroundColor: "red" }} onClick={logout}>
        Logout
      </button>
      <div>
        <form onSubmit={submitLogin}>
          <input
            type="email"
            name="email"
            id="login-email"
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            name="password"
            id="login-password"
            onChange={handleInputChange}
          />
          <label htmlFor="password">password</label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
