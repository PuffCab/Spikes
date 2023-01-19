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

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setCharacters(result.results);
  //     });
  useEffect(() => {
    console.log("useEffect Run ");
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        // setTimeout(() => {
        //   setCharacters(result.results);
        //   setLoading(false);
        // }, 2000);
        setCharacters(result.results);
        setLoading(false);
      });
  }, [count]);

  return (
    <div>
      <div>Characters</div>
      {/* {characters &&
        characters.map((character) => {
          return <p key={character.id}>{character.name}</p>;
        })} */}
      {/* {!loading &&
        characters.map((character) => {
          return <p key={character.id}>{character.name}</p>;
        })} */}
      {loading ? (
        <p>...loading </p>
      ) : (
        characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )}
      <button onClick={increaseCount}>Count: {count}</button>
    </div>
  );
}

export default Characters;
