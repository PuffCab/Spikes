import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h2>No ricks and no morties here</h2>
      <p>
        <Link to="/">Go to Home page</Link>
      </p>
    </div>
  );
}

export default NoMatch;
