import React, { useState } from 'react';

import { cards } from './colors';

import useTimeMachine from './customHooks/useTimeMachine';
import Card from './components/Card/Card';

import './App.scss';

function App() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  // const previousCounter = usePreviousState(selectedCard);
  const [previousValue, getPreviousValue] = useTimeMachine(selectedCard);

  const [focus, setFocus] = useState<number | null>(null);

  const [historyPosition, setHistoryPosition] = useState(0);
  console.log(historyPosition);

  return (
    <div className="app">
      <h4>{previousValue !== null ? previousValue : 'deshabilitado'}</h4>
      <h3>posicion actual{selectedCard}</h3>
      <section className="machineButtons">
        <button
          onClick={() => {
            setFocus(getPreviousValue(historyPosition - 2));
            setHistoryPosition(historyPosition - 1);
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            setHistoryPosition(0);
            setFocus(selectedCard);
          }}
        >
          Resume
        </button>
        <button
          onClick={() => {
            setFocus(getPreviousValue(historyPosition));
            setHistoryPosition(historyPosition + 1);
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
