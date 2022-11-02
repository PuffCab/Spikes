import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

function Nav() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link> |{" "}
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "green" } : {};
        }}
        to="/characters"
      >
        Characters
      </NavLink>{" "}
      |{" "}
      <Link to="/contact" state={{ secretInfo: "some secret info" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
