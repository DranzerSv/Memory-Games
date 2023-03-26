import React, { useEffect, useState } from 'react';

import useTimeMachine from '../../customHooks/useTimeMachine';

import verifyWinner from './verifyWinner';

import Square from '../../components/Square';

import './board.scss';

function TicTactToe() {
  const emptyBoard = [null, null, null, null, null, null, null, null, null];

  const [boardState, setBoardState] =
    useState<Array<string | null>>(emptyBoard);
  const [previousValue, getPreviousValue] = useTimeMachine(boardState);

  const [renderedBoard, setRenderedBoard] = useState<Array<
    string | null
  > | null>(emptyBoard);

  const [historyPosition, setHistoryPosition] = useState(0);

  verifyWinner(boardState);

  const [next, setNext] = useState<boolean>(true);

  function handleClick(index: number) {
    const newBoardState = [...boardState];
    newBoardState[index] = next ? 'X' : '0';
    setNext(!next);
    setBoardState(newBoardState);
    setRenderedBoard(newBoardState);
  }
  return (
    <div>
      <button
        className={getPreviousValue(historyPosition) === null ? 'disable' : ''}
        onClick={() => {
          const value = getPreviousValue(historyPosition);
          if (value !== null) {
            setRenderedBoard(value);
            setHistoryPosition(historyPosition + 1);
          }
        }}
      >
        Previous
      </button>
      <button
        className={historyPosition === 0 ? 'disable' : ''}
        onClick={() => {
          if (historyPosition !== 0) {
            setRenderedBoard(getPreviousValue(historyPosition - 2));
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
            setRenderedBoard(boardState);
          }
        }}
      >
        Resume
      </button>
      <div className="board">
        {renderedBoard !== null
          ? renderedBoard.map((boardPosition, index) => (
              <Square
                key={index}
                id={index}
                symbol={boardPosition}
                handleClick={handleClick}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default TicTactToe;
