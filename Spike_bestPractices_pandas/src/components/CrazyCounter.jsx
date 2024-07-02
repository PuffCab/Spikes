import React, { useEffect, useState } from "react";

function CrazyCounter() {
  // console.log("component run");
  const [count, setCount] = useState(0);

  // const timer = () => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //     console.log("count", count);
  //   }, 1000);
  // };
  const timer = () => {
    const interval = setInterval(() => {
      setCount((prev) => {
        console.log("prev :>> ", prev);
        return prev + 1;
      });
    }, 1000);
  };
  // useEffect(() => {
  //   timer();
  // }, []); // with normal setCount(count + 1)and dependency, timer goes crazy
  useEffect(() => {
    timer();
  }, []); // with functional setCount() and no dependency, it works better...unless I edit the JSX

  //!check this one...works like this??
  // useEffect(() => {
  //   let subscribed = true;
  //   if (subscribed) {
  //     setInterval(() => {
  //       setCount((prev) => {
  //         console.log("prev :>> ", prev);
  //         return prev + 1;
  //       });
  //     }, 1000);
  //   }

  //   return () => {
  //     // clearInterval(interval);
  //     subscribed = false;
  //   };
  // }, []);

  //  useEffect(() => {
  //    let isCanceled = false;
  //    const timer = setInterval(() => {
  //      if (!isCanceled)
  //        setCount((prev) => {
  //          return prev + 1;
  //        });
  //    }, 1000);

  //    return () => {
  //      // clearInterval(timer);
  //      isCanceled = true;
  //    };
  //  }, []);

  return (
    <div>
      <h2>useEffect Clean up function</h2>
      <div>{count}</div>
    </div>
  );
}

export default CrazyCounter;
