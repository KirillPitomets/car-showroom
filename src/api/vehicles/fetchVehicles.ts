import type { VehiclesResponse } from './vehicle.type';
import { vehicleApi } from '../vehicleApi';

export const fetchVehicles = async (): Promise<VehiclesResponse> => {
  const vehicles: VehiclesResponse = await vehicleApi
    .get('')
    .then((res) => res.data);

  return vehicles;
};
