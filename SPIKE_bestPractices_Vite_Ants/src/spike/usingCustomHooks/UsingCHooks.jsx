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

  // const { data, error } = useFetch(rickMorty);
  // console.log("rickMortyData :>> ", data);

  // const { data: postsData, error: error2 } = useFetch(posts);
  // console.log("postsData :>> ", postsData);

  //! useIsAuth
  //we can use it directly in JSX

  //! useToggle

  const [toggleValue, toggleIt] = useToggle("to be", "or not to be");
  const [toggleValue2, toggleIt2] = useToggle(
    "i think",
    "therefore I am...although not sure what"
  );
  //! useCountDown
  const { message } = useCountDown(7000);
  const { message: message2 } = useCountDown(10000);

  //! useLocalStorage

  return (
    <div>
      <h2>Hooked on a (custom) feeling,by Blue Swede</h2>
      <h1>{toggleValue}</h1>
      {/* <button onClick={toggleIt}>change toggle</button>
      <h1>{toggleValue2}</h1>
      <button onClick={toggleIt2}>change toggle</button> */}
      <h2>{message}</h2>
      <h2>{message2}</h2>
    </div>
  );
}

export default UsingCHooks;
