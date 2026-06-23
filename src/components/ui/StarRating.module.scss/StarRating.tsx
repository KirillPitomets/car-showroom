import { Star } from 'lucide-react';
import cl from './StarRating.module.scss';
import type { FC } from 'react';

interface Props {
  rating: number;
}

export const StarRating: FC<Props> = ({ rating }) => {
  return (
    <div className={cl.raiting}>
      <Star size={14} fill="yellow" color="yellow" />
      <span className={cl.raiting__number}>{rating.toFixed(1)}</span>
    </div>
  );
};
