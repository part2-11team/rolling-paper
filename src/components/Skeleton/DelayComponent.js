import React from 'react';
import { useEffect, useState } from 'react';

const DELAY_MS = 300;

const DelayComponent = ({ children }) => {
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDelay(true);
    }, DELAY_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDelay) return null;

  return <>{children}</>;
};

export default DelayComponent;
