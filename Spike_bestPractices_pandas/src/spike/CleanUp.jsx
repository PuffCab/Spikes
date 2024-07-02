import React, { useState } from "react";
import { useEffect } from "react";

function CleanUp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect run");

    return () => {
      console.log("%c CLEAN UP FIRST", "color:orange");
      console.log("%c All clean, useEffect can run again", "color:purple");
    };
  }, [count]);

  return (
    <div>
      <h2>Clean, by Depeche Mode</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default CleanUp;
