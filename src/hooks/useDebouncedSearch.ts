import { useEffect, useState } from 'react';

export const useDebouncedSearch = (term: string) => {
  const [debouncedValue, setDebouncedValue] = useState(term);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(term);
    }, 400);

    return () => clearTimeout(timer);
  }, [term]);

  return debouncedValue;
};
