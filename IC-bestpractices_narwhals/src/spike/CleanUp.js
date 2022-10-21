import React, { useEffect, useState } from "react";

function CleanUp() {
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    console.log("useEffect run");
    //Alive is changing
    return () => {
      console.log("before runnning please clean up your mess first");
      // does cleaning
      console.log("all clean, useEffect can run again");
    };
  }, [alive]);

  return (
    <div>
      <h2>useEffect Clean up function</h2>
      <button onClick={() => setAlive(!alive)}>change Alive</button>
    </div>
  );
}

export default CleanUp;
