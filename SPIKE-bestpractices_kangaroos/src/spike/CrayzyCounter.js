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
    let isCanceled = false;
    const timer = setInterval(() => {
      if (!isCanceled) {
        setCount((prev) => {
          return prev + 1;
        });
      }
    }, 1000);

    return () => {
      // clearInterval(timer);
      isCanceled = true;
    };
  }, [count]);

  return (
    <div>
      <h2>Crazy, by Aerosmith</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default CrayzyCounter;
