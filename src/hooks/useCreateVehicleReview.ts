import { useQueryClient } from '@tanstack/react-query';
import type { Review, Vehicle } from '../api/vehicles/type/vehicle.type';
import type { ReviewForm } from '../schemes/reviewForm.schema';
import { reviewsStorage } from '../utils/reviewsStorage';
import { vehicleKeys } from '../api/vehicles/vehicles.keys';

export const useCreateVehicleReview = (vehicleId: string) => {
  const queryClient = useQueryClient();

  return (data: ReviewForm) => {
    const vehicleData: Review = {
      reviewerName: data.name,
      reviewerEmail: data.email,
      comment: data.comment,
      rating: data.rating,
      date: new Date().toISOString(),
    };

    reviewsStorage.createReview(vehicleId, vehicleData);

    queryClient.setQueryData<Vehicle>(
      vehicleKeys.vehicleById(vehicleId),
      (old) => {
        if (!old) return;

        return {
          ...old,
          reviews: [vehicleData, ...old.reviews],
        };
      }
    );
  };
};
