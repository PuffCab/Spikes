import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/10"
      );
      const result = await response.json();
      console.log("result :>> ", result);
      setUser(result);
    } catch (error) {
      console.log("error :>> ", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <div>
      <span data-testid="user">{user.name}</span>
      <span
        data-testid="error"
        style={{
          color: "red",
          visibility: error ? "visible" : "hidden",
        }}
      >
        cannot log in
      </span>
      <form action="">
        <input
          type="text"
          placeholder="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!userName || !password} onClick={handleClick}>
          {loading ? "...loading..." : "login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
