import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <p>{character.name}</p>
      <Link to={character.name}>
        <img src={character.image} alt="" />
      </Link>
    </div>
  );
}

export default Character;
