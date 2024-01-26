import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CrayzyCounter() {
  const [count, setCount] = useState(0);

  const timer = () => {
    setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // let isCanceled = false;
    let isSubscribed = true;
    const timer = setInterval(() => {
      if (isSubscribed) {
        setCount((prev) => {
          return prev + 1;
        });
      }
    }, 1000);

    return () => {
      // clearInterval(timer);
      // isCanceled = true;
      isSubscribed = false;
    };
  }, [count]);

  return (
    <div>
      <h2>Crazy, by Aerosmith </h2>
      <h1>{count} </h1>
    </div>
  );
}

export default CrayzyCounter;
