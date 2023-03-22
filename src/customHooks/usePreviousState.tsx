import { useState, useRef, useEffect } from 'react';

function usePreviousState<T>(state: T): T | null {
  const prevState = useRef<T | null>(null);
  const [currentState, setCurrentState] = useState<T>(state);
  useEffect(() => {
    prevState.current = currentState;
    setCurrentState(state);
  }, [state]);

  return prevState.current;
}

export default usePreviousState;
