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

  const { data, error } = useFetch(rickMorty);
  console.log("Rick and Morty data :>> ", data);

  const { data: data2, error: error2 } = useFetch(posts);
  console.log("Posts data2 :>> ", data2);

  //! useIsAuth
  //we can use it directly in JSX

  //! useToggle
  const [message, toggleValue] = useToggle("to be", "or not to be");
  const [message2, toggleValue2] = useToggle("yes", "no");

  //! useCountDown
  const { message: countdownMessage } = useCountDown(5000);
  const { message: countdownMessage2 } = useCountDown(10000);
  //! useLocalStorage
  const [storage, setStorageItems] = useLocalStorage("favorites");
  console.log("storage :>> ", storage);
  return (
    <div>
      <h2>Hooked on a (custom) feeling,by Blue Swede</h2>
      <h1>{countdownMessage}</h1>
      <h1>{countdownMessage2}</h1>
      {/* <button onClick={toggleValue}>{message}</button>
      <button onClick={toggleValue2}>{message2}</button> */}

      <button
        onClick={() => {
          setStorageItems((favs) => {
            //try changing the fav3:"pizza" for other key/value , eg. fav4:"chocolate cake"
            return { ...favs, fav3: "pizza" };
          });
        }}
      >
        save in local storage
      </button>
    </div>
  );
}

export default UsingCHooks;
