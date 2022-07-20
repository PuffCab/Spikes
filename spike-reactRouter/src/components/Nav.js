import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link>| <Link to="characters">Characters</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default Nav;
