import React from "react";
import Card from "react-bootstrap/Card";

function Character({ character }) {
  return (
    <div>
      <img src={character.image} alt="" />
      <p>{character.name}</p>
    </div>
  );
}

export default Character;
