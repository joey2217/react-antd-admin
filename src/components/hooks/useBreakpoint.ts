import { useEffect, useState } from 'react';
import debounce from "lodash/debounce";

export const isClient = typeof window === 'object';

export type Breakpoint = | 'xl' | 'lg' | 'md' | 'sm';

const sm = 576;
const md = 720;
const lg = 960;
const xl = 1140;

const breakpointConverter = (width: number): Breakpoint => {
  if (width > xl) {
    return 'xl';
  } else if (width > lg) {
    return 'lg';
  } else if (width > md) {
    return 'md';
  } else if (width > sm) {
    return 'sm';
  } else {
    return 'sm';
  }
}

const useBreakpoint = (initialWidth = Infinity): Breakpoint => {

  const [width, setWidth] = useState<number>(isClient ? window.innerWidth : initialWidth);

  useEffect((): (() => void) | void => {

    if (isClient) {
      const handler = () => {
        setWidth(window.innerWidth);
      };

      const debounceHandler = debounce(handler, 150)

      window.addEventListener('resize', debounceHandler);

      return () => {
        window.removeEventListener('resize', debounceHandler);
      };
    }
  }, []);

  return breakpointConverter(width);
};

export default useBreakpoint;