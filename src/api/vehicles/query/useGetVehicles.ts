import { useQuery } from '@tanstack/react-query';
import type { VehiclesResponse } from '../type/vehicle.type';
import { fetchVehicles } from '../axios/fetchVehicles';
import { vehicleKeys } from '../vehicles.keys';

export const useGetVehicles = () => {
  return useQuery<VehiclesResponse>({
    queryKey: [vehicleKeys.vehicles],
    queryFn: fetchVehicles,
  });
};
