import { useQuery } from '@tanstack/react-query';
import { fetchVehicleById } from '../axios/fetchVehicleById';
import { vehicleKeys } from '../vehicles.keys';

export const useGetVehicleById = (vehicleId: string) => {
  return useQuery({
    queryKey: vehicleKeys.vehicleById(vehicleId),
    queryFn: () => fetchVehicleById(vehicleId),
    enabled: !!vehicleId,
  });
};
