"use client";
import { APIResponse, Character } from "@/models/custom-types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function Characters() {
  console.log("process.env.DB_PASS:>> ", process.env.DB_PASS);
  console.log(
    "process.env.NEXT_PUBLIC_Password:>> ",
    process.env.NEXT_PUBLIC_Password
  );
  const componentType =
    typeof window === "undefined" ? "server component" : "client component";
  console.log("componentType :>> ", componentType);
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
      <Alert>
        This is a <strong>Client Side Component (CSR)</strong>. It is rendered
        by the browser when we visit the url.
      </Alert>
      <h2>Characters</h2>

      {characters &&
        characters.map((character) => {
          return (
            <div key={character.id}>
              <Link href={`/characters/${character.name}`}>
                <img src={character.image} alt={character.name} />
                <p>name: {character.name}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Characters;
