import React, { useEffect, useMemo, useState } from "react";

function useToggle(firstValue, secondValue) {
  //? Intento 1...dirty
  //     const [text, setText] = useState(firstValue);
  //     const [invertValue, setInvertValue] = useState(false);
  //   const toggleValue = (value) => {
  //     if (!value) {
  //       setText(secondValue);
  //       setInvertValue(value);
  //     } else {
  //       setText(firstValue);
  //       setInvertValue(value);
  //     }
  //   };
  //   return [text, invertValue, toggleValue];

  //?Intento 2...cleaner

  const [value, setValue] = useState(firstValue);

  const toggleValue = () => {
    setValue((currentValue) => {
      return currentValue === firstValue ? secondValue : firstValue;
    });
  };

  return [value, toggleValue];
}

export default useToggle;
