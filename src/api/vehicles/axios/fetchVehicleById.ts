import type { Vehicle } from '../type/vehicle.type';
import { vehicleApi } from '../../vehicleApi';

export const fetchVehicleById = async (id: string): Promise<Vehicle> => {
  const vehicles: Vehicle = await vehicleApi.get(id).then((res) => res.data);
  return vehicles;
};
