import React from "react";
import { useOutletContext } from "react-router-dom";

function Season2() {
  const { hello } = useOutletContext();
  return (
    <div>
      <h2>{hello}, welcome to Season 2</h2>
    </div>
  );
}
export default Season2;
