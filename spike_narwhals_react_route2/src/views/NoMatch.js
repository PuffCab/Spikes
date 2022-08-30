import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NoMatch() {
  let redirectHome = useNavigate();

  // let goHome = () => {
  //   redirectHome("/", { replace: true });
  // };
  useEffect(() => {
    setTimeout(() => {
      redirectHome("/");
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Nothig to see here ...</h2>
      {/* <button onClick={goHome}>Click here to go home</button> */}
      {/* <Navigate to="/" /> */}
    </div>
  );
}

export default NoMatch;
