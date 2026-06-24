import { useMemo } from 'react';
import { reviewsStorage } from '../utils/reviewsStorage';
import type { Vehicle } from '../api/vehicles/type/vehicle.type';

export const useMargeVehicleReviews = (
  vehicleId: string | undefined,
  vehicle: Vehicle | undefined
) => {
  return useMemo(() => {
    if (!vehicleId || !vehicle) return [];

    const reviews = reviewsStorage.getAll(vehicleId).reverse();

    return [...reviews, ...vehicle.reviews];
  }, [vehicleId, vehicle]);
};
