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

  // const { data, error } = useFetch(posts);

  //! useIsAuth
  //we can use it directly in JSX

  //! useToggle

  // const [value, toggleValue] = useToggle("to be", "or not to be");

  //! useCountDown
  // const { message } = useCountDown(3000);
  // const message2 = useCountDown(5000);

  //! useLocalStorage
  const [storage, setStorageItems] = useLocalStorage("favorites");

  return (
    <div>
      <h2>Hooked on a (custom) feeling,by Blue Swede</h2>
      {/* {data &&
        data.map((element) => {
          return <p>{element.title}</p>;
        })}
      {error && <h1>{error}</h1>} */}
      {/* {useIsAuth() ? <p>logged in</p> : <p>you need to login</p>} */}

      {/* <h2>{value}</h2>
      <button onClick={toggleValue}>do Hamlet</button> */}
      {/* <h2>{message}</h2>
      <h2>{message2.message}</h2> */}

      {/* <button
        onClick={() => {
          setStorageItems({
            fav1: "rice",
            fav2: "döner",
          });
        }}
      >
        save token
      </button> */}
      <button
        onClick={() => {
          setStorageItems((favs) => ({
            ...favs,
            fav4: "asfasf",
          }));
        }}
      >
        save token
      </button>
      <h2>{storage.token}</h2>
    </div>
  );
}

export default UsingCHooks;
