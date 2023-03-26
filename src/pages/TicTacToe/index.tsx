import React, { useState } from 'react';

import useTimeMachine from '../../customHooks/useTimeMachine';

import verifyWinner from './verifyWinner';

import Square from '../../components/Square';
import TicTactToeButtons from '../../components/TicTacToeButtons';

import './board.scss';

function TicTactToe() {
  const emptyBoard = [null, null, null, null, null, null, null, null, null];

  const [boardState, setBoardState] =
    useState<Array<string | null>>(emptyBoard);
  const [previousValues, getPreviousValue] = useTimeMachine(boardState);

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
      <TicTactToeButtons
        getPreviousValue={getPreviousValue}
        historyPosition={historyPosition}
        setRenderedBoard={setRenderedBoard}
        setHistoryPosition={setHistoryPosition}
        boardState={boardState}
        finished={finished}
        history={previousValues}
      />

      <div className="board">
        {renderedBoard !== null
          ? renderedBoard.map((boardPosition, index) => (
              <Square
                key={index}
                id={index}
                symbol={boardPosition}
                handleClick={handleSquareClick}
                isTraveling={historyPosition !== 0 ? true : false}
              />
            ))
          : null}
      </div>
      <h2>El siguiente es {next ? 'X' : '0'}</h2>
      <h1>{finished ? 'finalizado' : null}</h1>
    </div>
  );
}

export default TicTactToe;
