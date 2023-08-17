import React from "react";
import { Link, Outlet } from "react-router-dom";

type Props = {};

function SeasonsLayout() {
  return (
    <>
      <nav>
        <Link to="season1">Season 1</Link> | <Link to="season2">Season 2</Link>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default SeasonsLayout;
