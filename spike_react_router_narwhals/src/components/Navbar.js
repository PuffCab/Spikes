import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
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
      <Link to="evolution">Evolution</Link>
    </nav>
  );
}

export default Navbar;
