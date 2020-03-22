//https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
import React, { useState, useEffect } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceFunc = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(debounceFunc);
    };
  }, [value]);

  return debouncedValue;
}
