import React, { useEffect, useState } from "react";

function useCountDown(countDownTime) {
  const [message, setMessage] = useState(
    `a ${countDownTime / 1000} seconds ⏳ started`
  );

  useEffect(() => {
    setTimeout(() => {
      setMessage("⌛️ Time up!");
    }, countDownTime);
  }, [countDownTime]);

  return { message };
}

export default useCountDown;
