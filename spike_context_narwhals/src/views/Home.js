import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/authContext";
import { CharactersContext } from "../context/charactersContext.js";

function Home() {
  console.log("home run");

  const { characters } = useContext(CharactersContext);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Home</h2>
      {user && <p>Hello {user.name}</p>}
      {characters && (
        <p>come and meet our {characters.length} Rick & Morty Characters</p>
      )}
    </div>
  );
}

export default Home;
