import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Character from "../components/Character";
import { CharactersContext } from "../context/charactersContext.js";

function Characters() {
  const { characters, loader, error, fetchData, deleteAll } =
    useContext(CharactersContext);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Rick and Morty fansite</h2>
      <Button variant="danger" onClick={deleteAll}>
        Delete all
      </Button>
      {!loader ? (
        characters.map((character, i) => {
          return (
            <div key={i}>
              <Character character={character} />
            </div>
          );
        })
      ) : (
        <p>....loading....</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
