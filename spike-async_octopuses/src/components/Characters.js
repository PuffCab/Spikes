import React, { useEffect, useState } from "react";
import Character from "./Character";

function Characters() {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchCharacters = () => {
  //   const url = "https://rickandmortyapi.com/api/character";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result.results);
  //       setCharacters(result.results);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.name);
  //       setError(error.name);
  //     });
  // };

  const fecthCharactersAsync = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const response = await fetch(url);
      const result = await response.json();
      setCharacters(result.results);

      console.log("async results", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // fetchCharacters();
      fecthCharactersAsync();
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Rick & Morty App</h2>
      {characters ? (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      ) : (
        <p>.....loading......</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
