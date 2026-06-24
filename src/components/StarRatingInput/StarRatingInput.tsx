import { useState, type FC } from 'react';
import cl from './StarRatingInput.module.scss';
import { Star } from 'lucide-react';

interface Props {
  minRating: number;
  maxRating: number;
  handleRating: (rating: number) => void;
}

export const StarRatingInput: FC<Props> = ({
  minRating,
  maxRating,
  handleRating,
}) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className={cl.stars}>
      <label className={cl.label}>Rating</label>
      <div>
        {Array.from({ length: maxRating }, (_, indx) => indx + 1).map(
          (star) => (
            <Star
              key={star}
              className={`${cl.star} ${star <= (hovered || minRating) ? cl['star_active'] : ''}`}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              onClick={() => handleRating(star)}
            />
          )
        )}
      </div>
    </div>
  );
};
