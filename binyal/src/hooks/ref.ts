import { useRef, useEffect } from 'react';

export const useRefElement = <T>(ref?: React.ForwardedRef<T>) => {
  const eRef = useRef<T>(null);
  useEffect(() => {
    if (typeof ref === 'function') {
      ref(eRef.current);
    } else if (ref) {
      ref.current = eRef.current;
    }
  }, [ref, eRef]);
  return eRef;
};
