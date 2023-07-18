import React, { useEffect } from "react";
import { useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  // const timer = () => {
  //   setInterval(() => {
  //     setCount((prev) => {
  //       return prev + 1;
  //     });
  //   }, 1000);
  // };

  useEffect(() => {
    // timer();
    let isCancelled = false;

    const timer = setInterval(() => {
      if (isCancelled === false) {
        setCount((prev) => {
          return prev + 1;
        });
      }
    }, 1000);

    return () => {
      // clearInterval(timer);
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      <h2>Crazy counter</h2>

      <h1>{count}</h1>
    </div>
  );
}

export default CrayzyCounter;
