import cl from './Vehicle.module.scss';
import type { FC } from 'react';
import type { Vehicle } from '../../api/vehicles/type/vehicle.type';
import { VehicleCard } from '../VehicleCard/VehicleCard';
import { VehicleListSkeleton } from './Skeleton';
import { NotFoundState } from '../ui/NotFoundState/NotFoundState';
import { ErrorState } from '../ui/ErrorState/ErrorState';

interface Props {
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
  vehicles: Vehicle[];
}

export const VehicleList: FC<Props> = ({
  isLoading,
  isError,
  vehicles,
  onRetry,
}) => {
  if (isLoading) {
    return (
      <div className={cl.wrapper}>
        <VehicleListSkeleton length={5} />
      </div>
    );
  }

  if (isError) return <ErrorState onRetry={onRetry} />;
  if (!vehicles.length) {
    return <NotFoundState title="Vehicle not found" noButton />;
  }

  return (
    <div className={cl.wrapper}>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
};
