// 1. Import hook
import { createContext, useState } from "react";

// 2. Create Context / Store

export const CharactersContext = createContext();

// 3. Create provider
export const CharactersContextProvider = (props) => {
  console.log("props :>> ", props);

  // 4. Move state and function
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const result = await response.json();

      setCharacters(result.results);
      setLoader(false);
    } catch (error) {
      console.log("error", error);
      setError(error);
    }
  };
  const deleteAll = () => {
    setCharacters([]);
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loader,
        error,
        setCharacters,
        setLoader,
        fetchData,
        deleteAll,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
