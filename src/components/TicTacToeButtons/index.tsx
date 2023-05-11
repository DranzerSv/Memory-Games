import React, { useState } from 'react';

import './ticTacToeButtons.scss';

import { ITicTacToeButtonsProps } from '../../interfaces/ITicTacToeButtons';

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
  const [isReplayActive, setIsReplayActive] = useState(false);

  function showHistoryWithInterval() {
    let i = history.length - 1;
    const intervalId = setInterval(() => {
      setIsReplayActive(true);
      setRenderedBoard(history[i]);
      i--;
      if (i < 0) {
        clearInterval(intervalId);
        setIsReplayActive(false);
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
          disabled={isReplayActive}
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
