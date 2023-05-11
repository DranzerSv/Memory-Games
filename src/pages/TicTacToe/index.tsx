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
  const [previousValues, getPreviousValue, clearRegister] =
    useTimeMachine(boardState);

  const [historyPosition, setHistoryPosition] = useState(0);

  const [renderedBoard, setRenderedBoard] = useState<Array<
    string | null
  > | null>(emptyBoard);

  const [next, setNext] = useState<boolean>(true);

  const finished = verifyWinner(boardState);

  const previousSymbol = next ? '0' : 'X';

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
        setBoardState={setBoardState}
        boardState={boardState}
        finished={finished}
        history={previousValues}
        emptyBoard={emptyBoard}
        clearRegister={clearRegister}
      />
      {!finished ? (
        <div className="nextSymbol">
          <p>Next to Move</p>
          <div className="symbol">{next ? 'X' : '0'} </div>
        </div>
      ) : null}

      <h1 className="finished">
        {finished ? `${previousSymbol} wins!!` : null}
      </h1>
      <div className="boardContainer">
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
    </div>
  );
}

export default TicTactToe;
