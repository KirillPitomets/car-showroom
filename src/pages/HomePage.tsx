import cl from './HomePage.module.scss';
import { fetchVehicles } from '../api/vehicles/fetchVehicles';
import { VehicleList } from '../components/VehicleList';
import { useQuery } from '@tanstack/react-query';
import { type VehiclesResponse } from '../api/vehicles/vehicle.type';
import { useVehicleFilters } from '../hooks/useVehicleFilters';
import { Sidebar } from '../components/ui/sidebar/sidebar';

export const HomePage = () => {
  const { data: vehiclesData, isLoading } = useQuery<VehiclesResponse>({
    queryKey: ['car-list'],
    queryFn: fetchVehicles,
  });

  const { filteredVehicles, filters, setFilters } = useVehicleFilters(
    vehiclesData?.products ?? []
  );

  return (
    <div className={cl.wrapper}>
      <Sidebar filters={filters} handleFilters={setFilters} />

      <VehicleList vehicles={filteredVehicles} isLoading={isLoading} />
    </div>
  );
};
