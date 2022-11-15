import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NoMatch() {
  const clickHome = useNavigate();

  const goHome = () => {
    clickHome("/");
  };

  useEffect(() => {
    setTimeout(() => {
      clickHome("/");
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Nothing to see here, keep walking</h2>
      {/* <Link to="/">go back to home</Link> */}
      <Navigate to="/" />
      {/* <button onClick={goHome}>go home</button> */}
      <p>you will redirected to home</p>
    </div>
  );
}

export default NoMatch;
