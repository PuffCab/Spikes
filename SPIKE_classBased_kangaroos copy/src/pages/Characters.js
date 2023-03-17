import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

function Characters() {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(true);

  let url = "https://rickandmortyapi.com/api/character";

  // Async/await with arrow function
  const asyncFetch = async () => {
    try {
      const response = await fetch(url);

      const result = await response.json();
      setCharacters(result.results);
      setError(false);
    } catch (error) {
      console.log("error", error);
      console.log("error:async", error.message);
      setError(true);
    }
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <div>
      <h1>Rick and Morty app</h1>
      {characters &&
        characters.map((character) => {
          return <p key={character.id}>{character.name}</p>;
        })}

      {error && <h1>Runnnnn!!!!</h1>}
    </div>
  );
}

export default Characters;
