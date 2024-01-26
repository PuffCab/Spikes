import React, { useEffect, useMemo, useState } from "react";

function useToggle(firstValue, secondValue) {
  const [value, setValue] = useState(firstValue);

  const toggleValue = () => {
    setValue((currentValue) => {
      return currentValue === firstValue ? secondValue : firstValue;
    });
  };

  return [value, toggleValue];
}

export default useToggle;
