import { useEffect, useState } from 'react';

export const useResize = (func: () => void) => {
  useEffect(() => {
    const onResize = () => {
      func();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [func]);
};

export const useResizeWidth = (func: (width?: number) => void) => {
  const [width, setWidth] = useState<number>();

  useResize(() => setWidth(window.innerWidth));

  useEffect(() => {
    func(width);
  }, [width]);
};

export const useResizeHeight = (func: (height?: number) => void) => {
  const [height, setHeight] = useState<number>();

  useResize(() => setHeight(window.innerHeight));

  useEffect(() => {
    func(height);
  }, [height]);
};
