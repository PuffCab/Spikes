import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <img src={character.image} alt="" />
      <Link to={`${character.name}`}>{character.name}</Link>
    </div>
  );
}

export default Character;
