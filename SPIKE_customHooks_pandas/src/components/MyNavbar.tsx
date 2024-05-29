import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function MyNavbar() {
  // const [user, setUser] = useState<User | null>(null);
  // give acces to the AuthContext
  const { user, setUser } = useContext(AuthContext);

  const login = () => {
    setUser({
      name: "Raúl",
      email: "email@email.com",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink
        to="about"
        style={({ isActive }) => {
          return isActive ? { fontSize: "50px" } : {};
        }}
      >
        About
      </NavLink>{" "}
      |{/* {user ? <Link to="characters">Characters</Link> : <p></p>} */}
      <Link to="characters">Characters</Link>| <Link to="contact">Contact</Link>
      {user ? (
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="info" onClick={login}>
          Login
        </Button>
      )}{" "}
    </nav>
  );
}

export default MyNavbar;
