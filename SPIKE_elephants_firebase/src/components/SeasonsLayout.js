import React from "react";
import { Link, Outlet } from "react-router-dom";

function SeasonsLayout() {
  const myStyle = {
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
  };
  return (
    <>
      <nav style={myStyle}>
        <Link to="season1">Season 1</Link> <Link to="season2">Season 2</Link>{" "}
      </nav>
      <Outlet context={{ message: "this is coming through my outlet" }} />
    </>
  );
}

export default SeasonsLayout;
