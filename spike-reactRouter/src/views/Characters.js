import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Character from "../components/Character";

function Characters() {
  const [characters, setCharacters] = useState(["hi"]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const data = await response.json();
      console.log(data.results);
      setCharacters(data.results);
      setLoader(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {characters ? (
        characters.map((character, i) => {
          return (
            <div key={i}>
              <Character character={character} />
            </div>
          );
        })
      ) : (
        <p>....Loading.....</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Characters;
