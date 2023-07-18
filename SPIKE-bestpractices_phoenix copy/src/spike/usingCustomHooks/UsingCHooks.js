import React from "react";
import useFetch from "./hooks/useFetch";

import useCountDown from "./hooks/useCountDown";
import useToggle from "./hooks/useToggle";

function UsingCHooks() {
  //! useFetch
  const rickMorty = "https://rickandmortyapi.com/api/character";
  const posts = "https://jsonplaceholder.typicode.com/posts";

  const rickMmortyData = useFetch(rickMorty);
  const postsData = useFetch(posts);
  // console.log("information", information);

  //! useToggle

  const [value, toggleValue] = useToggle("to be", "or not to be");

  //! useCountDown
  const counter1 = useCountDown(3000);
  const counter2 = useCountDown(5000);
  return (
    <div>
      <h2>Custom hooks</h2>
      <h2>{value}</h2>
      <button onClick={toggleValue}>toggle</button>
      <div>
        <h1>{counter1.message}</h1>
        <h1>{counter2.message}</h1>
      </div>
      <div>
        <h2>Rick and Morty</h2>
        {rickMmortyData &&
          rickMmortyData.data?.results.map((result) => {
            return <p>{result.name}</p>;
          })}
        {rickMmortyData.error && <h1>{rickMmortyData.error}</h1>}
      </div>
      <div>
        <h2>Posts</h2>
        {postsData &&
          postsData?.data?.map((result) => {
            return <p>{result.title}</p>;
          })}
        {postsData.error && <h1>{postsData.error}</h1>}
      </div>
    </div>
  );
}

export default UsingCHooks;
