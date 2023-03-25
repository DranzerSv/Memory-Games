import React, { useEffect, useState } from 'react';

import usePreviousState from '../../customHooks/usePreviousState';
import verifyWinner from './verifyWinner';

import Square from '../../components/Square';

import './board.scss';

function TicTactToe() {
  const [boardState, setBoardState] = useState<Array<string | null>>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  verifyWinner(boardState);

  const [next, setNext] = useState<boolean>(true);

  function handleClick(index: number) {
    const newBoardState = [...boardState];
    newBoardState[index] = next ? 'X' : '0';
    setNext(!next);
    setBoardState(newBoardState);
  }
  return (
    <div>
      <div className="board">
        {boardState.map((boardPosition, index) => (
          <Square
            key={index}
            id={index}
            symbol={boardPosition}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default TicTactToe;
