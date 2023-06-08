import React, { useEffect } from "react";
import "../style/character.css";
import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <p>{character.name}</p>
      <Link to={`${character.name}`}>
        <img src={character.image} alt={character.name} />
      </Link>
    </div>
  );
}

export default Character;
