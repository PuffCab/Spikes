import React from "react";
import { Link, Outlet } from "react-router-dom";

function EvolutionLayout() {
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="season1">season 1</Link> | <Link to="season2">season2</Link>
      </nav>
      <Outlet context={{ hello: "hi there" }} />
    </>
  );
}

export default EvolutionLayout;
