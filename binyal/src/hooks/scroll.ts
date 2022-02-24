import React, { useEffect } from 'react';

export const useScroll = <T extends HTMLElement>(
  onScroll: () => void,
  refs?: React.RefObject<T>[],
) => {
  useEffect(() => {
    if (refs) {
      refs.forEach((el) => {
        el.current?.addEventListener('scroll', onScroll);
      });
    }
    document.addEventListener('scroll', onScroll);
    return () => {
      if (refs) {
        refs.forEach((el) => {
          el.current?.removeEventListener('scroll', onScroll);
        });
      }
      document.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, refs]);
};
