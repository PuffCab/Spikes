import React, { useEffect, useState } from "react";
import Character from "../components/Character";

function Characters() {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
 




  useEffect(() => {
    console.log("useEffect Run ");
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        
        setCharacters(result.results);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>Characters</div>
      
      {loading ? (
        <p>...loading </p>
      ) : (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )}
      
    </div>
  );
}

export default Characters;
