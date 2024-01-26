import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CleanUp() {
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    console.log("%c useEffect run", "color:orange");

    return () => {
      console.log("%c do some cleaning first", "color:red");

      console.log("%c all clean, run useEffect again", "color:green");
    };
  }, [isTrue]);

  return (
    <div>
      <h2>Clean, by Depeche Mode</h2>
      <button onClick={() => setIsTrue(!isTrue)}>Change isTrue</button>
    </div>
  );
}

export default CleanUp;
