import React, { useEffect, useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect Run");

    let isSubscribed = true;

    setInterval(() => {
      if (isSubscribed === true) {
        setCount((prev) => {
          return prev + 1;
        });
      }
    }, 1000);

    return () => {
      console.log("clean first");
      // clearInterval(interval);
      isSubscribed = false;
      console.log("cleaning done, run again");
    };
  }, [count]);

  return (
    <div>
      <h2>useEffect Clean up function</h2>

      <p>{count}</p>
    </div>
  );
}

export default CrayzyCounter;
