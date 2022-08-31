import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "../context/authContext";

function Navbar() {
  console.log("navbar run");
  const { user, setUser } = useContext(AuthContext);
  const redirect = useNavigate();
  const login = () => {
    setUser({ name: "Emily" });
    redirect("/characters");
  };

  const logout = () => {
    setUser(null);
    redirect("/login");
  };
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        Home
      </NavLink>{" "}
      | <Link to="contact">Contact</Link> |{" "}
      <Link to="characters">Characters</Link> | <Link to="login">Login</Link> |{" "}
      <Link to="evolution">Evolution</Link> |{" "}
      {user ? (
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="info" onClick={login}>
          Login
        </Button>
      )}
    </nav>
  );
}

export default Navbar;
