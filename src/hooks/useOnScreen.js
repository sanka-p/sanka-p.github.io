// Custom hook to determine if a given element is currently visible on the screen

import { useEffect, useState, useRef } from 'react';

function useOnScreen(ref) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  const options = {
    rootMargin: '0px',
    threshold: 1.0, // Trigger callback when the entire element is visible
  }

  const callback = ([entry]) => {
    return setIsOnScreen(entry.isIntersecting) 
  }

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}

export default useOnScreen;
