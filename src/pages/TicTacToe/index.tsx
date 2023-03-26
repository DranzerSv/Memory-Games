import React, { useState, useEffect } from 'react';

import useTimeMachine from '../../customHooks/useTimeMachine';

import verifyWinner from './verifyWinner';

import Square from '../../components/Square';
import TicTactToeButtons from '../../components/TicTacToeButtons';

import './board.scss';

function TicTactToe() {
  const emptyBoard = [null, null, null, null, null, null, null, null, null];

  const [boardState, setBoardState] =
    useState<Array<string | null>>(emptyBoard);
  const [previousValue, getPreviousValue] = useTimeMachine(boardState);

  const [historyPosition, setHistoryPosition] = useState(0);

  const [renderedBoard, setRenderedBoard] = useState<Array<
    string | null
  > | null>(emptyBoard);

  const [next, setNext] = useState<boolean>(true);

  const finished = verifyWinner(boardState);

  function handleSquareClick(index: number) {
    if (!finished) {
      const newBoardState = [...boardState];
      newBoardState[index] = next ? 'X' : '0';
      setNext(!next);
      setBoardState(newBoardState);
      setRenderedBoard(newBoardState);
    }
  }

  return (
    <div>
      <section className="machineButtons">
        <button
          className={
            getPreviousValue(historyPosition) === null ? 'disable' : ''
          }
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
        {finished ? (
          <button
            className={historyPosition === 0 ? 'disable' : ''}
            onClick={() => {
              if (historyPosition !== 0) {
                setHistoryPosition(0);
                setRenderedBoard(boardState);
              }
            }}
          >
            Replay
          </button>
        ) : (
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
        )}
      </section>

      <div className="board">
        {renderedBoard !== null
          ? renderedBoard.map((boardPosition, index) => (
              <Square
                key={index}
                id={index}
                symbol={boardPosition}
                handleClick={handleSquareClick}
              />
            ))
          : null}
      </div>
      <h1>{finished ? 'finalizado' : null}</h1>
    </div>
  );
}

export default TicTactToe;
