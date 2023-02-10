import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

// Create context

export const CharactersContext = createContext();

// Create the Store

export const CharatersContextProvider = (props) => {
  //   console.log("props", props);
  //Put here the State and functions you want to share/provide
  const url = "https://rickandmortyapi.com/api/character";
  //   const [characters, setCharacters] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   const fetchCharacters = async () => {
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setCharacters(result.results);
  //     setLoading(false);
  //   };
  const { characters, loading, setCharacters } = useFetch(url);

  const deleteCharacters = () => {
    setCharacters([]);
  };

  const [dakrMode, setDakrMode] = useState(true);

  return (
    <CharactersContext.Provider
      value={{ characters, loading, deleteCharacters }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
