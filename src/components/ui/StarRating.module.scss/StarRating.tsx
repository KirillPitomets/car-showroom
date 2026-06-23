import { Star } from 'lucide-react';
import cl from './StarRating.module.scss';
import type { FC } from 'react';

interface Props {
  rating: number;
  iconSize?: number;
  variable?: 'fill' | 'outline';
}

export const StarRating: FC<Props> = ({
  rating,
  iconSize = 14,
  variable = 'fill',
}) => {
  return (
    <div className={cl.raiting}>
      {variable === 'fill' ? (
        <Star size={iconSize} fill="yellow" color="yellow" />
      ) : (
        <Star size={iconSize} />
      )}
      <span className={cl.raiting__number}>{rating.toFixed(1)}</span>
    </div>
  );
};
