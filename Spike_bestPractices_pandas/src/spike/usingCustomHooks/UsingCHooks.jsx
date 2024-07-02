import React from "react";
import useFetch from "./hooks/useFetch";
import { useIsAuth } from "./hooks/useIsAuth";
import { useLocalStorage } from "./hooks/useLocalStorage";
import useCountDown from "./hooks/useCountDown";
import useToggle from "./hooks/useToggle";

function UsingCHooks() {
  //! useFetch
  const rickMorty = "https://rickandmortyapi.com/api/character";
  const posts = "https://jsonplaceholder.typicode.com/posts";

  //! useIsAuth
  //we can use it directly in JSX

  //! useToggle

  //! useCountDown

  //! useLocalStorage

  return (
    <div>
      <h2>Hooked on a (custom) feeling,by Blue Swede</h2>
    </div>
  );
}

export default UsingCHooks;
