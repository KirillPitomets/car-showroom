import cl from './VehicleReviews.module.scss';
import { type FC } from 'react';
import type { Review as ReviewType } from '../../api/vehicles/type/vehicle.type';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import type { ReviewForm as ReviewFormType } from '../../schemes/reviewForm.schema';
import { useCreateVehicleReview } from '../../hooks/useCreateVehicleReview';

interface Props {
  vehicleId: string;
  reviews: ReviewType[];
}

export const VehicleReviews: FC<Props> = ({ vehicleId, reviews }) => {
  const createVehicleReview = useCreateVehicleReview(vehicleId);

  const onSubmit = (data: ReviewFormType) => {
    createVehicleReview(data);
  };

  return (
    <section className={cl.reviews}>
      <ReviewForm onSubmit={onSubmit} />

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
    </section>
  );
};
