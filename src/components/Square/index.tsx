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
      <div className="mark">{symbol}</div>
    </div>
  );
}

export default Square;
