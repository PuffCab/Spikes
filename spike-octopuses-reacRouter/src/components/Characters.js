import React, { useEffect, useState } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setCharacters(result.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.name);
        setError(error.name);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchCharacters();
    }, 100);
  }, []);

  return (
    <div>
      <h2>Rick & Morty App</h2>
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
