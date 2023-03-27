import React, { Dispatch, SetStateAction } from 'react';

import './ticTacToeButtons.scss';

interface ITicTacToeButtonsProps {
  getPreviousValue: (position: number) => (string | null)[] | null;
  historyPosition: number;
  setRenderedBoard: Dispatch<SetStateAction<(string | null)[] | null>>;
  setHistoryPosition: Dispatch<SetStateAction<number>>;
  setBoardState: Dispatch<SetStateAction<(string | null)[]>>;
  boardState: (string | null)[];
  finished: boolean;
  history: (string | null)[][];
  emptyBoard: null[];
  clearRegister: () => void;
}

export default function TicTactToe({
  getPreviousValue,
  historyPosition,
  setRenderedBoard,
  setHistoryPosition,
  setBoardState,
  boardState,
  finished,
  history,
  emptyBoard,
  clearRegister,
}: ITicTacToeButtonsProps) {
  function showHistoryWithInterval() {
    let i = history.length - 1;
    const intervalId = setInterval(() => {
      setRenderedBoard(history[i]);
      i--;
      if (i < 0) {
        clearInterval(intervalId);
      }
    }, 500);
  }
  function restartGame() {
    setHistoryPosition(0);
    setRenderedBoard(emptyBoard);
    setBoardState(emptyBoard);
    clearRegister();
  }
  return (
    <section className="gameButtons">
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
      {finished ? (
        <button
          className="replay"
          onClick={() => {
            showHistoryWithInterval();
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
      <button
        onClick={() => {
          restartGame();
        }}
      >
        restart
      </button>
    </section>
  );
}
