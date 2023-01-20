import React, { useEffect, useState } from "react";
import Character from "../components/Character";

function Characters() {
  console.log("component run");
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  // const fetchData = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  // }
  async function fetchMyData() {
    const response = await fetch(url);
    const data = await response.json();
  }
  useEffect(() => {
    console.log("useEffect Run ");
    // fetchData()
    fetchMyData();
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setCharacters(result.results);
    //     setLoading(false);
    //   });
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      <button onClick={increaseCount}>Count: {count}</button>

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
