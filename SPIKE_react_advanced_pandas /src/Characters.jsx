import { Fragment, useEffect, useState } from "react";
import Character from "./components/Character";

function Characters() {
  console.log("%c component re-rendered", "color:green");
  const [number, setNumber] = useState(0);
  const [characters, setCharacters] = useState(null);

  const sayHi = () => {
    console.log("HI THERE");
  };

  // setNumber(number + 1);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log("data :>> ", data);
      setCharacters(data.results);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    console.log("%c useEffect run", "color:orange");
    // sayHi();
    fetchCharacters();
  }, []);

  const increaseNumber = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1 className="yellow">Characters</h1>
      <h2>{number}</h2>
      <button onClick={increaseNumber}>+</button>
      {/* {characters &&
        characters.map((character) => {
          return <p>{character.name}</p>;
        })} */}
      {characters ? (
        characters.map((character) => {
          return <Character key={character.name} character={character} />;
        })
      ) : (
        <h2>NO DATA.........</h2>
      )}
    </div>
  );
}

export default Characters;
