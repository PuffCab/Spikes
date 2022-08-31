import { useEffect, useState } from "react";

function useMyFetch(url) {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCharacters(result);
    } catch (error) {
      setError(error);
    }
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return { characters, error, fetchData };
}
export { useMyFetch };
