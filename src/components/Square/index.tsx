import React, { useState } from 'react';

import { ISquareProps } from '../../interfaces/ISquare';

import './square.scss';

function Square({ id, symbol, handleClick, isTraveling }: ISquareProps) {
  return (
    <div
      className="square"
      onClick={() => {
        if (symbol === null && !isTraveling) {
          handleClick(id);
        }
      }}
    >
      <h4>{id}</h4>
      <h1>{symbol}</h1>
    </div>
  );
}

export default Square;
