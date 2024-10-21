import React, { useEffect, useState } from "react";
import "../styles/customStyle.css";

function Characters() {
  console.log("%c Component Rendered", "color:green");
  const [characters, setCharacters] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);
  const [error, setError] = useState(false);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      console.log("response", response);
      if (!response.ok) {
        setError(true);
      }
      const result = await response.json();
      setCharacters(result.results);

      console.log("result", result);
    } catch (error) {
      console.log("error", error);
      setError(true);
    }
  };
  //! DO NOT DO THIS. DO NOT CALL A FUNCTION DIRECTLY INSIDE THE COMPONENT :  fetchCharacters();

  const handleIncreasePageClick = () => {
    setPageNumber(pageNumber + 1);
  };
  useEffect(() => {
    console.log("%c UseEffect run ", "color:purple");
    fetchCharacters();
  }, [pageNumber]);

  return (
    <div>
      {console.log("%c JSX rendered", "color:orange")}
      <button onClick={handleIncreasePageClick}>Next</button>;
      {characters &&
        characters.map((character) => {
          return (
            <p className="red" key={character.id}>
              {character.name}
            </p>
          );
        })}
      {error && <h1>Something went wrong :(</h1>}
    </div>
  );
}

export default Characters;
