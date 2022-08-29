import React from "react";
import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <Link to={`${character.name}`}>
        <button>{character.name}</button>
      </Link>
      <p>{character.species}</p>
    </div>
  );
}

export default Character;
