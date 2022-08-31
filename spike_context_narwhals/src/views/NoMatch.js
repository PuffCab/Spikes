import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NoMatch() {
  let redirectHome = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      redirectHome("/");
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Nothig to see here ...</h2>
    </div>
  );
}

export default NoMatch;
