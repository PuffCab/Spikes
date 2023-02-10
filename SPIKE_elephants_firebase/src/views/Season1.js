import React from "react";
import { useOutletContext } from "react-router-dom";

function Season1() {
  console.log("useOutletContext() :>> ", useOutletContext());
  const { message } = useOutletContext();
  return (
    <div>
      <h2>Season1</h2>
      <p>{message}</p>
    </div>
  );
}

export default Season1;
