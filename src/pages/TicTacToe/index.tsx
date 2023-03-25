import React, { useState } from 'react';

import usePreviousState from '../../customHooks/usePreviousState';

import Square from '../../components/Square';

function TicTactToe() {
  const [boardState, setBoardState] = useState([
    null,
    null,
    null,
    'X',
    null,
    null,
    null,
    null,
    null,
  ]);

  console.log(boardState);

  function handleClick() {
    //setBoardState(['Xi', '0', 'X', 'OTRO']);
  }
  return (
    <div>
      {boardState.map((boardPosition, index) => (
        <Square key={index} id={index} symbol={boardPosition} />
      ))}
    </div>
  );
}

export default TicTactToe;
