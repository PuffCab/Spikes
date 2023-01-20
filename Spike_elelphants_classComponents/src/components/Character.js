import React from "react";

function Character({ character }) {
  return (
    <div>
      <p>{character.name}</p>
      <img src={character.image} alt="" />
    </div>
  );
}

export default Character;
