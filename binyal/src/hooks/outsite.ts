import { useEffect } from 'react';

export const useOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void,
) => {
  useEffect(() => {
    const onClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [ref, callback]);
};

export const useOutsides = <T extends HTMLElement>(
  refs: React.RefObject<T>[],
  callback: () => void,
) => {
  useEffect(() => {
    const onClick = (event: Event) => {
      let count = 0;
      for (let i = 0, n = refs.length; i < n; i += 1) {
        const ref = refs[i];
        if (ref.current && !ref.current.contains(event.target as Node)) {
          count += 1;
        }
      }
      if (count === refs.length) callback();
    };
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('mousedown', onClick);
    };
  }, [refs, callback]);
};
