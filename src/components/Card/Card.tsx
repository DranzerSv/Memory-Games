import React from 'react';

import { ICardProps } from '../../interfaces/ICard';

import '../Card/card.scss';

export default function Card({ id }: ICardProps) {
  return (
    <div className={'square color' + id}>
      <h1>{id}</h1>
    </div>
  );
}
