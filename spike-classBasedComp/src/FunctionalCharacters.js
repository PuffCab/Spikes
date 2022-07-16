import React, { useEffect, useState } from "react";

function FunctionalCharacters() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character/");
  const [characthers, setCharacthers] = useState([]);
  const [error, setError] = useState(null);
  const [test, setTest] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const results = await response.json();
      setCharacthers(results.results);
    } catch (error) {
      setError(error);
    }
  };

  const handleTest = () => {
    setTest(!test);
    console.log(test);
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log("a state changed");
  }, [test]);

  return (
    <div>
      <h1>FunctionalCharacters</h1>
      <button onClick={handleTest}>change Test</button>
      <div>
        {characthers &&
          characthers.map((character) => {
            return <img src={character.image} alt="" key={character.name} />;
          })}
      </div>
    </div>
  );
}

export default FunctionalCharacters;
