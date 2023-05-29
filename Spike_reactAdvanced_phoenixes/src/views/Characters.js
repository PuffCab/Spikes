import React, { useEffect, useState } from "react";
import Character from "../components/Character";

function Characters() {
  // Create a state Variable to store the list of characters
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacters = async () => {
    let url = "https://rickandmortyapi.com/api/character";

    // Regular fetch
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("data", data);
    //       setCharacters(data.results);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {/* //! conditional rendering */}
      {/* {characters &&
        characters.map((character) => {
          return <p key={character.id}>{character.name}</p>;
        })}
      {loading && <h1>....Loading...</h1>}
      {error && <h1>{error}</h1>} */}

      {/* //! ternary operator */}
      {characters ? (
        characters.map((character) => {
          return <Character key={character.id} name={character.name} />;
        })
      ) : (
        <p>{error}</p>
      )}

      {/* No conditional rendering */}
      {/* {characters.map((character) => {
        return <p>{character.name}</p>;
      })} */}
    </div>
  );
}

export default Characters;
