import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NoMatch() {
  const redirectTo = useNavigate();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       redirectTo("/contact");
  //     }, 2000);
  //   }, []);

  return (
    <div>
      {/* <h2>Ups... noting to see here</h2>
      <div>...you will be redirected home...</div> */}
      <Navigate to={"/"} />
    </div>
  );
}

export default NoMatch;
