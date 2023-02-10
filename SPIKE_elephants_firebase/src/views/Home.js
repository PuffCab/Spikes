import React from "react";
import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { CharactersContext } from "../store/CharactersContext";

function Home() {
  const { characters } = useContext(CharactersContext);

  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Welcome {user?.email} to my Rick & Morty fansite</h2>
      {characters && (
        <h4>Find here information about {characters.length} characters </h4>
      )}
    </div>
  );
}

export default Home;
