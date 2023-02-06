import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const myStyle = {
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
  };

  const activeNavLink = ({ isActive }) => {
    return isActive ? { color: "red" } : { color: "green" };
  };
  return (
    <nav style={myStyle}>
      <Link to="/">Home</Link> <Link to="/characters">Characters</Link>{" "}
      <NavLink to="/about" replace>
        {({ isActive }) => {
          return isActive ? "About" : "NOT ABOUT";
        }}
      </NavLink>
      <NavLink
        to="/contact"
        state={{ msg: "secret info here" }}
        style={activeNavLink}
      >
        Contact
      </NavLink>{" "}
      <NavLink to="/seasons">Seasons</NavLink>
    </nav>
  );
}

export default NavBar;
