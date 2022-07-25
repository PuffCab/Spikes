import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import Character from "../components/Character";

function About(props) {
  return (
    <div>
      <h2>About Ricky & Morty</h2>
      <Link to={`123`}>
        <p>click here</p>
      </Link>
    </div>
  );
}

export default About;
