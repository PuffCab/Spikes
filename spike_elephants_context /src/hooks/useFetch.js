import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setCharacters(result.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
  }, [url]);

  return { characters, loading, setCharacters };
}

export default useFetch;
