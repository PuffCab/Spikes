import React from "react";
import characters from "./database/characters";

function Characters() {
  console.log("characters :>> ", characters);
  return (
    <div>
      <h1>Characters</h1>
      {characters.results.map((character) => {
        return <p key={character.id}>{character.name}</p>;
      })}
    </div>
  );
}

export default Characters;
