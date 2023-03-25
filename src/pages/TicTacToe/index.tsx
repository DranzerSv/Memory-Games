import React, { useState } from 'react';

import usePreviousState from '../../customHooks/usePreviousState';

import Square from '../../components/Square';

function TicTactToe() {
  const [boardState, setBoardState] = useState([
    null,
    null,
    null,
    2,
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
        <Square key={index} />
      ))}
    </div>
  );
}

export default TicTactToe;
