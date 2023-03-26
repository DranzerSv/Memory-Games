import React, { Dispatch, SetStateAction } from 'react';

interface ITicTacToeButtonsProps {
  getPreviousValue: (position: number) => (string | null)[] | null;
  historyPosition: number;
  setRenderedBoard: Dispatch<SetStateAction<(string | null)[] | null>>;
  setHistoryPosition: Dispatch<SetStateAction<number>>;
}

export default function TicTactToe({
  getPreviousValue,
}: ITicTacToeButtonsProps) {
  return <section className="machineButtons"></section>;
}
