import React, { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    );
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <div>
        <button onClick={() => fetchData(2)}>Prev</button>
        <button onClick={() => fetchData(3)}>Next</button>
      </div>
      {characters &&
        characters.map((character) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
    </div>
  );
}

export default Characters;
