import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Character from "../components/Character";
import { CharactersContext } from "../store/CharactersContext";

function Characters() {
  const { characters, loading, fetchCharacters, deleteCharacters } =
    useContext(CharactersContext);

  // console.log("context :>> ", context);

  // useEffect(() => {
  //   fetchCharacters();
  // }, []);

  return (
    <div>
      <div>Characters</div>
      <Button onClick={deleteCharacters} variant="danger">
        Delte all
      </Button>

      {/* {loading ? (
        <p>...loading </p>
      ) : (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )} */}
      {characters.length > 0 ? (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      ) : loading ? (
        <p>....loading...</p>
      ) : (
        <p>No characters to display</p>
      )}
    </div>
  );
}

export default Characters;
