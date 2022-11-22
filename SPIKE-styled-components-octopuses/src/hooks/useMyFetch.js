import React, { useEffect, useState } from "react";

function useMyFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
    setLoading(false);
    // console.log("result", result);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading };
}

export default useMyFetch;
