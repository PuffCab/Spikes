import React, { useContext, useEffect, useState } from "react";
import Character from "../components/Character";
import { CharactersContext } from "../context/CharactersContext";
import { Button } from "react-bootstrap";

function Characters() {
  const { info, setInfo, loading, setLoading, error, getCharacters } =
    useContext(CharactersContext);

  // useEffect(() => {
  //   getCharacters();
  // }, []);

  const deleteCharacters = () => {
    setInfo(null);
    setLoading(true);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Button variant="danger" onClick={deleteCharacters}>
        Delete
      </Button>
      <div className="container">
        {info &&
          info.results.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        {loading && <h1>....Loading...</h1>}
        {error && <h1>{error}</h1>}
      </div>
    </div>
  );
}

export default Characters;
