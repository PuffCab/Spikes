import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { AuthContext } from "../context/AuthContext";

function Nav() {
  const { user, setUser, login } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
  };
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link> |{" "}
      {user ? (
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "green" } : {};
          }}
          to="/characters"
        >
          Characters
        </NavLink>
      ) : (
        <p>no link</p>
      )}
      |{" "}
      <Link to="/contact" state={{ secretInfo: "some secret info" }}>
        Contact
      </Link>{" "}
      |{" "}
      {user ? (
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      ) : (
        <Button variant="info" onClick={() => login()}>
          Login
        </Button>
      )}
    </nav>
  );
}

export default Nav;
