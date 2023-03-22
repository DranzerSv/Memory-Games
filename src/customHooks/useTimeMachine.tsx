import { useState, useRef, useEffect } from 'react';

function useTimeMachine<T>(state: T): [T, () => T | void] {
  const register = useRef<T[]>([]); //para que el array persista;

  const prevState = useRef<T | null>(null);
  const [currentState, setCurrentState] = useState<T>(state);
  useEffect(() => {
    register.current.unshift(state);
    console.log(register);
    prevState.current = currentState;
    setCurrentState(state);
  }, [state]);

  //return prevState.current;
  const position = useRef(0);
  const previousValue = register.current[position.current];

  function getPreviousValue() {
    if (
      register.current.length > 0 &&
      position.current < register.current.length
    ) {
      console.log(register.current[position.current]);
      position.current += 1;
    }
  }

  return [previousValue, getPreviousValue];
}

export default useTimeMachine;
