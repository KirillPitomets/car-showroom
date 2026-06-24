import cl from './VehicleReviews.module.scss';
import type { FC } from 'react';
import type { Review as ReviewType } from '../../api/vehicles/type/vehicle.type';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

interface Props {
  reviews: ReviewType[];
}

export const VehicleReviews: FC<Props> = ({ reviews }) => {
  return (
    <div className={cl.reviews}>
      <ReviewForm />

      {reviews.map((review, indx) => (
        <Review
          key={`${review.date} - ${indx}`}
          reviewer={{
            name: review.reviewerName,
            email: review.reviewerEmail,
          }}
          date={review.date}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
    </div>
  );
};
