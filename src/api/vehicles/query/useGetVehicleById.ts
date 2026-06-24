import { useQuery } from '@tanstack/react-query';
import { fetchVehicleById } from '../axios/fetchVehicleById';
import { vehicleKeys } from '../vehicles.keys';

export const useGetVehicleById = (vehicleId: string) => {
  return useQuery({
    queryKey: vehicleKeys.vehicleById(vehicleId),
    queryFn: async () => {
      const vehicle = await fetchVehicleById(vehicleId);

      if (!vehicle) {
        throw new Error('Vehicle not found');
      }

      return vehicle;
    },
  });
};
