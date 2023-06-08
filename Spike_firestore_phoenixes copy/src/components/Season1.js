import React from "react";
import { useOutletContext } from "react-router-dom";

function Season1() {
  const randomText = useOutletContext();
  // console.log("useOutletContext()", useOutletContext());
  // console.log("randomText", randomText);
  return (
    <>
      <h1>Season1</h1>;<h3>{randomText}</h3>
    </>
  );
}

export default Season1;
