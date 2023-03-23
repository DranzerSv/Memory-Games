import React, { useState } from 'react';

import { cards } from './colors';

import usePreviousState from './customHooks/usePreviousState';
import useTimeMachine from './customHooks/useTimeMachine';
import Card from './components/Card/Card';

import './App.scss';

function App() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  // const previousCounter = usePreviousState(selectedCard);
  const [previousValue, getPreviousValue] = useTimeMachine(selectedCard);

  const [focus, setFocus] = useState<number | null>(null);

  const [anterior, setAnterior] = useState(0);

  return (
    <div className="app">
      <h4>{previousValue !== null ? previousValue : 'deshabilitado'}</h4>
      <h3>posicion actual{selectedCard}</h3>
      <section className="machineButtons">
        <button>Next</button>
        <button>Resume</button>
        <button
          onClick={() => {
            setFocus(getPreviousValue(anterior));
            setAnterior(anterior + 1);
          }}
        >
          Previous
        </button>
      </section>
      <section className="cardsContainer">
        {' '}
        {cards.map((card) => (
          <Card
            key={card['id']}
            id={card['id']}
            setSelectedCard={setSelectedCard}
            isSelected={focus === card['id'] ? true : false}
            setFocus={setFocus}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
