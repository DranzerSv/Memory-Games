import { useState, useRef, useEffect } from 'react';

function useTimeMachine<T>(
  state: T
): [T[], (position: number) => T | null, () => void] {
  const register = useRef<T[]>([]);

  const prevState = useRef<T | null>(null);
  const [currentState, setCurrentState] = useState<T>(state);

  useEffect(() => {
    register.current.unshift(state);
    prevState.current = currentState;
    setCurrentState(state);
  }, [state]);

  function getPreviousValue(position: number) {
    if (register.current.length > 0 && register.current.length > position + 1) {
      return register.current[position + 1];
    }
    return null;
  }
  function clearRegister() {
    register.current = [];
  }

  return [register.current, getPreviousValue, clearRegister];
}

export default useTimeMachine;
