import cl from './Vehicle.module.scss';
import type { FC } from 'react';
import type { Vehicle } from '../../api/vehicles/vehicle.type';
import { VehicleCard } from '../VehicleCard/VehicleCard';

interface Props {
  isLoading: boolean;
  vehicles: Vehicle[];
}

export const VehicleList: FC<Props> = ({ isLoading, vehicles }) => {
  // TODO - LOADER
  if (isLoading) {
    return <div style={{ fontSize: '2rem', color: 'red' }}>Loading</div>;
  }

  return (
    <div>
      {!vehicles ? (
        'No card :9'
      ) : (
        <div className={cl.wrapper}>
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      )}
    </div>
  );
};
