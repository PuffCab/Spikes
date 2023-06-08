import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  //   console.log("url", url);
  const getCharacters = async () => {
    // let url = "https://rickandmortyapi.com/api/character";

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log("data", data);
      setInfo(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    getCharacters();
  }, [url]);

  return { info, loading, error, setInfo, setLoading, setError };
}

export default useFetch;
