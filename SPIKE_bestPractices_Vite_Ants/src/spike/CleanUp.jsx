import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(true);

  useEffect(() => {
    console.log("%c useEffect run", "color:orange");

    return () => {
      console.log("%c clean up firs!!!", "color:red");

      console.log(
        "%c all clean and shinny, run useEffect again",
        "color:green"
      );
    };
  }, [alive]);

  return (
    <div>
      <h2>Clean, by Depeche Mode</h2>
      <button onClick={() => setAlive(!alive)}>Change Alive</button>
    </div>
  );
}

export default CleanUp;
