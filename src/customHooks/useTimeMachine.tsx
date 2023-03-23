import { useState, useRef, useEffect } from 'react';

function useTimeMachine<T>(
  state: T
): [T | null, (position: number) => T | number] {
  const register = useRef<T[]>([]); //para que el array persista;

  const prevState = useRef<T | null>(null);
  const [currentState, setCurrentState] = useState<T>(state);

  useEffect(() => {
    register.current.unshift(state);
    prevState.current = currentState;
    setCurrentState(state);
  }, [state]);
  // const position = useRef(1);
  // const [previousValue, setPreviousValue] = useState<T | null>(null);

  //const previousValue = register.current[position.current];

  // function getPreviousValue() {
  //   if (
  //     register.current.length > 0 &&
  //     position.current < register.current.length
  //   ) {
  //     setPreviousValue(register.current[position.current]);

  //     position.current += 1;
  //   }
  // } // a getPreviousVAlue podria pasarle un argumento para que me de 1 posicion mas antigua o
  function getPreviousValue(position: number) {
    console.log(register.current[position + 1]);
    return register.current[position + 1];
  }

  // //una posición más reciente

  return [
    register.current.length > 1 ? register.current[1] : null,
    getPreviousValue,
  ];
}

export default useTimeMachine;
