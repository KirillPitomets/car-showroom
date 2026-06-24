import { Star } from 'lucide-react';
import cl from './StarRating.module.scss';
import type { FC } from 'react';
import clsx from 'clsx';

interface Props {
  rating: number;
  iconSize?: number;
  fontSize?: number;
  className?: string;
  variable?: 'fill' | 'outline';
}

export const StarRating: FC<Props> = ({
  rating,
  iconSize = 14,
  fontSize,
  className,
  variable = 'fill',
}) => {
  return (
    <div className={clsx(cl.rating, className)}>
      {variable === 'fill' ? (
        <Star size={iconSize} fill="yellow" color="yellow" />
      ) : (
        <Star size={iconSize} />
      )}
      <span className={cl.rating__number} style={{ fontSize }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
};
