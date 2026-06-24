import cl from './Vehicle.module.scss';
import type { FC } from 'react';
import type { Vehicle } from '../../api/vehicles/type/vehicle.type';
import { VehicleCard } from '../VehicleCard/VehicleCard';
import { VehicleListSkeleton } from './Skeleton';

interface Props {
  isLoading: boolean;
  vehicles: Vehicle[];
}

export const VehicleList: FC<Props> = ({ isLoading, vehicles }) => {
  if (isLoading) {
    return (
      <div className={cl.wrapper}>
        <VehicleListSkeleton length={5} />
      </div>
    );
  }

  return (
    <div className={cl.wrapper}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};
