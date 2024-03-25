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
  console.log("data :>> ", data);
  const { data: data2 } = useFetch(posts);
  console.log("data2 :>> ", data2);

  //! useIsAuth
  //we can use it directly in JSX

  //! useToggle
  const [value, toggleValue] = useToggle("to be", "or not to be");
  const [value2, toggleValue2] = useToggle("data", "or webdev");
  //! useCountDown

  const { message } = useCountDown(5000);
  const { message: message2 } = useCountDown(10000);
  //! useLocalStorage

  return (
    <div>
      <h2>Hooked on a (custom) feeling,by Blue Swede</h2>
      {/* {useIsAuth() ? <h1>Logged In</h1> : <h1>login first</h1>} */}
      {/* <h1>{value}</h1>
      <button onClick={() => toggleValue()}>toggle</button>
      <h1>{value2}</h1>
      <button onClick={() => toggleValue2()}>toggle</button> */}
      <h1>{message}</h1>
      <h1>{message2}</h1>
    </div>
  );
}

export default UsingCHooks;
