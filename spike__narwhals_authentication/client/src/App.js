import { useEffect, useState } from "react";
import getToken from "./utils/getToken.js";
import "./App.css";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  const [user, setUser] = useState(null);

  const isUserLoggedin = () => {
    const token = getToken();

    if (token) {
      console.log("user is logged in");
      setUser(true);
    }
    if (!token) {
      console.log("user is NOT logged in");
      setUser(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    const token = getToken();
    console.log("token after logout", token);
    setUser(false);
  };

  useEffect(() => {
    isUserLoggedin();
  }, [user]);

  return (
    <div className="App">
      <h1>Our superduper MERN App</h1>

      <button onClick={logout} style={{ backgroundColor: "red" }}>
        logout
      </button>
      <br />
      <Register />
      <br />
      <Login />
    </div>
  );
}

export default App;
