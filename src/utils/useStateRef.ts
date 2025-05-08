import { useCallback, useRef, useState } from 'react';

export function useStateRef<T>(
  initial: T,
): [T, (x: T | ((prev: T) => T)) => void, () => T] {
  const [state, _setState] = useState<T>(initial);
  const ref = useRef<T>(state);

  const setState = useCallback((newVal: T | ((prev: T) => T)): void => {
    _setState(prevState => {
      const value =
        typeof newVal === 'function'
          ? (newVal as (prev: T) => T)(prevState)
          : newVal;
      ref.current = value;
      return value;
    });
  }, []);

  const getState = useCallback((): T => {
    return ref.current;
  }, []);

  return [state, setState, getState];
}
