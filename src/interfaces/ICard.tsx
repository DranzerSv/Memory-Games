import { Dispatch, SetStateAction } from 'react';

export interface ICardProps {
  id: number;
  setSelectedCard: Dispatch<SetStateAction<number | null>>;
}
