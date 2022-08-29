import React from "react";
import { useNavigate } from "react-router-dom";

function NoMatch() {
  let redirectHome = useNavigate();

  let goHome = () => {
    redirectHome("/", { replace: true });
  };

  return (
    <div>
      <h2>Nothig to see here ...</h2>
      <button onClick={goHome}>Click here to go home</button>
    </div>
  );
}

export default NoMatch;
