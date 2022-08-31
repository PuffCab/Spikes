import React from "react";
import { Link, NavLink } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <NavLink to={`${character.name}`} state={{ species: character.species }}>
        <button>{character.name}</button>
      </NavLink>
      <p>{character.species}</p>
    </div>
  );
}

export default Character;
