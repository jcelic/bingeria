import { useState } from 'react';

export const useRevealSpoilers = () => {
  const [showSpoilers, setShowSpoilers] = useState(false);

  const toggleSpoilers = () => {
    setShowSpoilers((prev) => !prev);
  };
  return { showSpoilers, toggleSpoilers };
};
