import React from "react";

function Character({ character }) {




    
  return (
    <div>
      <p>{character.name}</p>
      <p>{character.species}</p>
    </div>
  );
}

export default Character;
