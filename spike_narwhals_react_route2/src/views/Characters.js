import React, { useEffect, useState } from "react";
import Character from "../components/Character";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();
      console.log("result :>> ", result.results);

      setCharacters(result.results);
      setLoader(false);
      console.log(result.results);
    } catch (error) {
      console.log("error", error);
      setError(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div>
      {console.log(characters)}
      <h2>Rick and Morty fansite</h2>
      {/* conditional rendering */}
      {/* {!loader &&
        characters.map((character) => {
          return <p>{character.name}</p>;
        })} */}

      {/* Conditional rendering with ternary operator */}
      {!loader ? (
        characters.map((character, i) => {
          return (
            <div key={i}>
              {/* <p>{character.name}</p> */}
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
