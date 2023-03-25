import React, { useState } from 'react';

import { ISquareProps } from '../../interfaces/ISquare';

import './square.scss';

function Square({ id, symbol, handleClick }: ISquareProps) {
  return (
    <div
      className="square"
      onClick={() => {
        handleClick(id);
      }}
    >
      <h4>{id}</h4>
      <h1>{symbol}</h1>
    </div>
  );
}

export default Square;
