"use client";
import { APIResponse, Character } from "@/models/custom-types";
import React, { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState<Character[] | null>(null);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const result = (await response.json()) as APIResponse;

    setCharacters(result.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {characters &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>name: {character.name}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Characters;
