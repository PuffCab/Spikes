// 1. Import hook
import { createContext, useState } from "react";

// 2. Create Context / Store

export const CharactersContext = createContext();

// 3. Create provider
export const CharactersContextProvider = (props) => {
  // console.log("props :>> ", props);
  console.log("context run again ");

  // 4. Move state and function

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.results);
        setCharacters(result.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.name);
        setError(error.name);
      });
  };
  const deleteAll = () => {
    setCharacters(null);
  };
  return (
    <CharactersContext.Provider
      value={{
        characters,
        loading,
        error,
        fetchCharacters,
        setCharacters,
        deleteAll,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
