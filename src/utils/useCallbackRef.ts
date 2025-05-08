import React, { useCallback, useEffect, useRef } from 'react';

// chatSteam 작업 때 현재 cancel done success 여부 확인을 위해 사용합니다. (debouncedCallback 또는 interval)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | undefined,
  deps: React.DependencyList = [],
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
}
