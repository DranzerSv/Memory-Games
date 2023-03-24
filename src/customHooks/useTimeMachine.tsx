import { useState, useRef, useEffect } from 'react';

function useTimeMachine<T>(
  state: T
): [T | null, (position: number) => T | null] {
  const register = useRef<T[]>([]); //para que el array persista;

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

  return [
    register.current.length > 1 ? register.current[1] : null,
    getPreviousValue,
  ];
}

export default useTimeMachine;
