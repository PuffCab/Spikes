import React, { useEffect, useState } from "react";
import "../styles/customStyle.css";

function Characters() {
  const [characters, setCharacters] = useState();

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();
      setCharacters(result.results);

      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      {characters &&
        characters.map((character) => {
          return <p className="red">{character.name}</p>;
        })}
    </div>
  );
}

export default Characters;
