import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const myStyle = {
    borderBottom: "solid 1px",
    marginBottom: "1rem",
  };
  const { user, setUser, logout } = useContext(AuthContext);
  const goTo = useNavigate();

  const login = () => {
    setUser({
      name: "Raúl",
      email: "test@test.com",
    });
    goTo("/characters");
  };
  const handleLogout = () => {
    logout();
    goTo("/");
  };
  return (
    <>
      <nav style={myStyle}>
        <NavLink to="/">Home</NavLink> | {""}
        <Link to="/characters">Characters</Link> | {""}
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "green" } : {};
          }}
          to="/about"
        >
          {({ isActive }) => {
            return isActive ? "About" : "not in About";
          }}
        </NavLink>{" "}
        | {""}
        <Link to="/chat" className={!user ? "disabled" : ""}>
          Chat
        </Link>{" "}
        | {""}
        <Link to="/seasons">Seasons</Link> | {""}
        {user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
        | {""}
        {user ? (
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="info" onClick={login}>
            Login
          </Button>
        )}
      </nav>
    </>
  );
}

export default Navbar;
