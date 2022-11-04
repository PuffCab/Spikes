import React, { useContext } from "react";
import { CharactersContext } from "../context/charactersContext";

function Home() {
  const { characters } = useContext(CharactersContext);
  return (
    <div>
      <h2>HOME</h2>
      <h6>
        In this app you can see {characters.length} rick and morty characters
      </h6>
      <p>and the first one is {characters[0]?.name}</p>
    </div>
  );
}

export default Home;
