import type { VehiclesResponse } from '../type/vehicle.type';
import { vehicleApi } from '../../vehicleApi';

export const fetchVehicles = async (): Promise<VehiclesResponse> => {
  const vehicles: VehiclesResponse = await vehicleApi
    .get('category/vehicle')
    .then((res) => res.data);

  return vehicles;
};
