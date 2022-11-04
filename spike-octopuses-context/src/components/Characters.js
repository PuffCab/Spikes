import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CharactersContext } from "../context/charactersContext";
import Character from "./Character";

function Characters() {
  const { characters, error, fetchCharacters, deleteAll } =
    useContext(CharactersContext);

  useEffect(() => {
    setTimeout(() => {
      fetchCharacters();
    }, 100);
  }, []);

  return (
    <div>
      <h2>Rick & Morty App</h2>
      <Button variant="danger" onClick={deleteAll}>
        Delete All
      </Button>
      {characters ? (
        characters.map((character) => {
          return <Character character={character} key={character.name} />;
        })
      ) : (
        <p>.....loading......</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
