import React from 'react';

import { ICardProps } from '../../interfaces/ICard';

import '../Card/card.scss';

export default function Card({
  id,
  setSelectedCard,
  isSelected,
  setFocus,
  isTraveling,
}: ICardProps) {
  return (
    <div
      className={`square color${id} ${isSelected ? 'selected' : null}`}
      onClick={() => {
        if (!isTraveling) {
          setSelectedCard(id);
          setFocus(id);
        }
      }}
    >
      <h1>{id + ' ' + isSelected}</h1>
    </div>
  );
}
