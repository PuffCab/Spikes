import React from "react";
import { useOutletContext } from "react-router-dom";

function Season1() {
  console.log(useOutletContext());
  const { hello } = useOutletContext();
  return (
    <div>
      <h2>{hello}, welcome to Season 1</h2>
    </div>
  );
}

export default Season1;
