import React from "react";
import useFetch from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import useCountDown from "./hooks/useCountDown";
import useToggle from "./hooks/useToggle";
import { useIsAuth } from "./hooks/useIsAuth";

function UsingCHooks() {
  //? useHook
  const rickMorty = "https://rickandmortyapi.com/api/character";
  const posts = "https://jsonplaceholder.typicode.com/posts";

  const { data, error } = useFetch(posts);

  //? useIsAuth
  //we can use it directly in JSX

  //? useLocalStorage
  const [storedValues, setStoredValues] = useLocalStorage("favorites");

  //? useCountDown
  const { message } = useCountDown(3000);
  const message2 = useCountDown(5000);

  //? useToggle
  const [value, toggleValue] = useToggle("to be", "or not to be");

  return (
    <div>
      <h2>Hooked on a (custom) feeling,by Blue Swede</h2>

      <button onClick={() => toggleValue()}>toggle</button>
      {value}
      <p>{message}</p>
      <p>{message2.message}</p>
      <button
        //? to be able to pass a setter function and use spread operator to add new elements to the existing ones.
        onClick={(e) =>
          setStoredValues((favoriteItems) => ({
            ...favoriteItems,
            fav1: "favorite one",
          }))
        }
        //? to replace the current value for a new one
        // onClick={(e) =>
        //   setFavorites({
        //     email: "test@test.com",
        //   })
        // }
      >
        add to favorites
      </button>
      {storedValues.fav1}

      {useIsAuth() ? <p>Logged in</p> : <p>Please login first</p>}

      {/* {data &&
        data.map((element) => {
          return <p>{element.title}</p>;
        })}
      {error && <h1>{error}</h1>} */}
    </div>
  );
}

export default UsingCHooks;
