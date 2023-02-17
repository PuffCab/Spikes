import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

function NavBar() {
  const myStyle = {
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
  };

  const { login, user, setUser, logout } = useContext(AuthContext);

  const activeNavLink = ({ isActive }) => {
    return isActive ? { color: "red" } : { color: "green" };
  };

  // const logout = () => {
  //   setUser(null);
  // };

  return (
    <nav style={myStyle}>
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>{" "}
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
      <NavLink to="/seasons">Seasons</NavLink> |{" "}
      {user ? (
        <Button onClick={logout} variant="danger">
          Logout
        </Button>
      ) : (
        <Button onClick={login} variant="info">
          Login
        </Button>
      )}
    </nav>
  );
}

export default NavBar;
