import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";

function App() {
  const [user, setuser] = useState(false);

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const isUserLoggedIn = () => {
    const token = getToken();

    return token ? true : false;
  };

  useEffect(() => {
    const isUserLogged = isUserLoggedIn();
    if (isUserLogged) {
      console.log("%c user is logged in", "color:green");
      setuser(true);
    } else {
      console.log("%c user is NOT logged in", "color:red");
      setuser(false);
    }
  }, [user]);
  const logout = () => {
    localStorage.removeItem("token");
    setuser(false);
  };

  return (
    <>
      <h1>APP</h1>
      <button onClick={logout}>logout</button>
      <br />
      <Register />
      <br />
      <Login />
      <br />
      <Profile />
    </>
  );
}

export default App;
