import React, { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { AuthContext } from "../context/AuthContext";

function Home() {
  // const { characters } = useContext(CharactersContext);
  const myCharacters = useContext(CharactersContext);
  // console.log("characters in Home-->", characters);

  const { user } = useContext(AuthContext);

  return (
    <>
      <h1>home</h1>
      {user ? <h2>Welcome {user.email} !!</h2> : <h2>Login First...</h2>}
      {myCharacters.characters && (
        <h3>
          Find information about {myCharacters.characters.length} Rick and Morty
          Characters
        </h3>
      )}
    </>
  );
}

export default Home;
