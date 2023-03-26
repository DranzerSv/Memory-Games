import React, { Dispatch, SetStateAction } from 'react';

interface ITicTacToeButtonsProps {
  getPreviousValue: (position: number) => (string | null)[] | null;
  historyPosition: number;
  setRenderedBoard: Dispatch<SetStateAction<(string | null)[] | null>>;
  setHistoryPosition: Dispatch<SetStateAction<number>>;
  boardState: (string | null)[];
  finished: boolean;
}

export default function TicTactToe({
  getPreviousValue,
  historyPosition,
  setRenderedBoard,
  setHistoryPosition,
  boardState,
  finished,
}: ITicTacToeButtonsProps) {
  return (
    <section className="machineButtons">
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
  );
}
