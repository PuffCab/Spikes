import React, { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);

  const [page, setPage] = useState(1);
  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data :>> ", data);
    setCharacters(data.results);
    setInfo(data.info);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <div>
        {/* <button onClick={() => setPage(page - 1)}>Prev</button> */}
        {/* <button onClick={() => setPage(page + 1)}>Next</button> */}
        <button onClick={() => fetchData(info.next)}>Next</button>
      </div>
      {characters &&
        characters.map((character) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
    </div>
  );
}

export default Characters;
