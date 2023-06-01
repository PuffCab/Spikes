import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function NoMatch() {
  const goTo = useNavigate();
  // console.log("useNavigate()", useNavigate());
  //   const redirectTo = () => {
  //     goTo("/");
  //   };

  const automaticRedirect = () => {
    setTimeout(() => {
      goTo("/");
    }, 2000);
  };
  useEffect(() => {
    automaticRedirect();
  }, []);

  return (
    <div>
      <h1>...sorry...no content here</h1>
      {/* <Link to="/">go back to Home</Link> */}
      {/* <button onClick={redirectTo}>go Home</button> */}
      <h2>you will be redirected home in 2 seconds</h2>
    </div>
  );
}

export default NoMatch;
