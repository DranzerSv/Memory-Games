import React, { Dispatch, SetStateAction } from 'react';
export interface ITicTacToeButtonsProps {
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
