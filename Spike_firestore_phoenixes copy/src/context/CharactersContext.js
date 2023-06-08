import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

//1. Create the context
export const CharactersContext = createContext();

//2. define what we make available to share with our components

export const CharactersContextProvider = (props) => {
  //   console.log("props", props);
  //3. Move here the states and functions you want to share
  let url = "https://rickandmortyapi.com/api/character";

  const { info, setInfo, loading, setLoading, error } = useFetch(url);

  return (
    <CharactersContext.Provider
      value={{
        info,
        setInfo,
        loading,
        setLoading,
        error,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
