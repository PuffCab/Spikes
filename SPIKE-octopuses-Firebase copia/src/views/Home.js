import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CharactersContext } from "../context/charactersContext";

function Home() {
  const { characters } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>HOME</h2>
      {user && <h3>Welcome {user?.email} </h3>}
      <h6>
        In this app you can see {characters.length} rick and morty characters
      </h6>
      <p>and the first one is {characters[0]?.name}</p>
    </div>
  );
}

export default Home;
