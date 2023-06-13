import React, { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState(null);

  const [page, setPage] = useState(1);
  const initialURL = `https://rickandmortyapi.com/api/character/`;

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    setCharacters(data);
  };

  useEffect(() => {
    console.log("useEffect run");
    fetchData(initialURL);
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <div>
        <button onClick={() => fetchData(characters.info.prev)}>Prev</button>
        <button onClick={() => fetchData(characters.info.next)}>Next</button>
      </div>
      {characters &&
        characters.results.map((character) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
    </div>
  );
}

export default Characters;
