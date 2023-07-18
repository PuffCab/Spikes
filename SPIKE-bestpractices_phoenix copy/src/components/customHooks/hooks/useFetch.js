import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data", data);
      setData(data);
      setError(false);
    } catch (error) {
      setError("🙀🙀🙀🙀🙀");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error };
}

export default useFetch;
