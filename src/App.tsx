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

  return (
    <div className="app">
      <h4>{previousValue}</h4>
      <h3>posicion actual{selectedCard}</h3>
      <button>Next</button>
      <button
        onClick={() => {
          getPreviousValue();
        }}
      >
        Previous
      </button>
      {cards.map((card) => (
        <Card
          key={card['id']}
          id={card['id']}
          setSelectedCard={setSelectedCard}
        />
      ))}
    </div>
  );
}

export default App;
