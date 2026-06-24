import type { FC } from 'react';
import { CommentAuthor } from '../CommentAuthor/CommentAuthor';
import { StarRating } from '../ui/StarRating/StarRating';
import cl from './Review.module.scss';

interface Props {
  reviewer: {
    name: string;
    email: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export const Review: FC<Props> = ({ comment, date, rating, reviewer }) => {
  return (
    <div className={cl.review}>
      <header className={cl.review__header}>
        <CommentAuthor name={reviewer.name} email={reviewer.email} />

        <div className={cl.review__rating}>
          <StarRating rating={rating} />
        </div>
      </header>

      <div className={cl.review__main}>
        <p className={cl.review__comment}>{comment}</p>
        <time>{new Date(date).toLocaleDateString()}</time>
      </div>
    </div>
  );
};
