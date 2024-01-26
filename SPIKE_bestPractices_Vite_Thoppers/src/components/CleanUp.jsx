import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(true);

  useEffect(() => {
    console.log("%cuseEffect run", "color:green");

    return () => {
      console.log("%cplease cleanup first", "color:red");

      //we do some cleaning

      console.log("%call clean, useEffect can run again", "color:orange");
    };
  }, [alive]);

  return (
    <div>
      <h2>Clean, by Depeche Mode</h2>
      <button onClick={() => setAlive(!alive)}>change Alive</button>
    </div>
  );
}

export default CleanUp;
