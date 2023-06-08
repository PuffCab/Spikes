import React from "react";
import { Link, Outlet } from "react-router-dom";

function SeasonsLayout() {
  const myStyle = {
    borderBottom: "solid 1px",
    marginBottom: "1rem",
  };
  return (
    <div>
      <nav style={myStyle}>
        <Link to="season1">Season 1</Link> | {""}
        <Link to="season2">Season 2</Link>
      </nav>
      <Outlet context="some random text" />
    </div>
  );
}

export default SeasonsLayout;
