import React, { useEffect, useState } from "react";

function UseEffectRules() {
  // USEEFFECT Recap

  //1. Always use the dependy array https://www.youtube.com/shorts/NF7FFughuA4
  // 2. avoid RACE CONDITIONS ....what we do in CleanupFetch component. ...que es que la URL cambia entre el useEffect previo y el nuevo, y el data del old useEffect overwrites the new https://www.youtube.com/shorts/fXD9Ct03Q6k
  //3. Be careful when using arrays and objects in dependencies array ...be detailed (myObject.url), or use useMemo or useCallback https://www.youtube.com/shorts/qADQdrEKuJw
  //4. dont use functions in dependecy array (no usar. no veo practica)
  //5. AVOID using use effect!  (pagination example, fetching from the button directly) https://www.youtube.com/shorts/-RoKGk5Lju0

  const [data, setData] = useState({});
  const [url, setUrl] = useState(
    "https://jsonplaceholder.typicode.com/users/2"
  );

  const fetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  };

  //   useEffect(() => {
  //     fetchData(url);
  //   }, [url]);

  return (
    <div>
      <h2>UseEffectRules</h2>
      {data && (
        <div>
          <p>{data.name}</p>
          <p>{data.userName}</p>
          <p>{data.email}</p>
        </div>
      )}
      <button
        onClick={() =>
          fetchData("https://jsonplaceholder.typicode.com/users/2")
        }
      >
        Next
      </button>
      <button
        onClick={() =>
          fetchData("https://jsonplaceholder.typicode.com/users/1")
        }
      >
        Prev
      </button>
    </div>
  );
}

export default UseEffectRules;
