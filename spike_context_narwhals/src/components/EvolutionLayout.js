import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function EvolutionLayout() {
  // const [number, setNumber] = useState("3");
  let [searchParams, setSearchParams] = useSearchParams({ number: 3 });

  let number = searchParams.get("number");

  return (
    <>
      <nav>
        <Link to="season1">Season1</Link> <Link to="season2">Season2</Link>{" "}
        <Link to={`season ${number}`}>Season {number}</Link>
      </nav>
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ number: e.target.value })}
      />

      {/* <Outlet context={{ hello: "we are about to finish" }} /> */}
    </>
  );
}

export default EvolutionLayout;
