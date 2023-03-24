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

  return (
    <div className="app">
      <section className="machineButtons">
        <button
          className={historyPosition === 0 ? 'disable' : ''}
          onClick={() => {
            if (historyPosition !== 0) {
              setFocus(getPreviousValue(historyPosition - 2));
              setHistoryPosition(historyPosition - 1);
            }
          }}
        >
          Next
        </button>
        <button
          className={historyPosition === 0 ? 'disable' : ''}
          onClick={() => {
            if (historyPosition !== 0) {
              setHistoryPosition(0);
              setFocus(selectedCard);
            }
          }}
        >
          Resume
        </button>
        <button
          className={
            getPreviousValue(historyPosition) === null ? 'disable' : ''
          }
          onClick={() => {
            if (getPreviousValue(historyPosition) !== null) {
              setFocus(getPreviousValue(historyPosition));
              setHistoryPosition(historyPosition + 1);
            }
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
            isTraveling={historyPosition > 0 ? true : false}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
