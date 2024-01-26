import React, { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <h2>Characters</h2>
      <div>
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
      {characters &&
        characters.map((character) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
    </div>
  );
}

export default Characters;
