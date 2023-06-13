import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(true);

  useEffect(() => {
    console.log("%cuseEffect run", "color:orange");

    // do some shit...

    return () => {
      console.log("%cdo some cleaning before running again", "color:red");

      // we do the cleaning

      console.log("%call clean, you can run again", "color:green");
    };
  }, [alive]);

  return (
    <div>
      <h2>Clean, by Depeche Mode</h2>
      <button onClick={() => setAlive(!alive)}>change boolean</button>
    </div>
  );
}

export default CleanUp;
