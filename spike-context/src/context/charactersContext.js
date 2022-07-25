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
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const results = await response.json();
      setCharacters(results.results);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  //Modify context data from component

  const deleteData = () => {
    setCharacters(null);
  };

  // 5. Return the provide with its value and inject children component

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        loader,
        error,
        fetchData,
        deleteData,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
