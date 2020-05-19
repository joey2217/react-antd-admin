import { useEffect, useState } from 'react';
import debounce from "lodash/debounce";

export const isClient = typeof window === 'object';

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [state, setState] = useState<{ width: number; height: number }>({
    width: isClient ? window.innerWidth : initialWidth,
    height: isClient ? window.innerHeight : initialHeight,
  });

  useEffect((): (() => void) | void => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      const debounceHandler = debounce(handler, 150)

      window.addEventListener('resize', debounceHandler);

      return () => {
        window.removeEventListener('resize', debounceHandler);
      };
    }
  }, [setState]);

  return state;
};

export default useWindowSize;