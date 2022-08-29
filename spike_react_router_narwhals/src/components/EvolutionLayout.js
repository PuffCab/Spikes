import React from "react";
import { Link, Outlet } from "react-router-dom";

function EvolutionLayout() {
  return (
    <>
      <nav>
        <Link to="season1">Season1</Link>
        <Link to="season2">Season2</Link>
      </nav>
      <Outlet context={{ hello: "we are about to finish" }} />
    </>
  );
}

export default EvolutionLayout;
