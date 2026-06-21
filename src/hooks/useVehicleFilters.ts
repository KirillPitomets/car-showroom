import { useMemo, useState } from 'react';
import type { Vehicle } from '../api/vehicles/vehicle.type';

export type Filters = {
  search: string;
  brand: string;
  minRaiting: number;
  minPrice: number;
  maxPrice: number;
};

const initialFilters: Filters = {
  search: '',
  brand: '',
  minRaiting: 0,
  minPrice: 0,
  maxPrice: 0,
};

export const useVehicleFilters = (vehicles: Vehicle[]) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const filteredVehicles = useMemo(() => {
    if (!vehicles) {
      return [];
    }
    const searchValue = filters.search.toLowerCase();

    return vehicles.filter(
      (vehicle) =>
        vehicle.title.toLowerCase().includes(searchValue) ||
        vehicle.brand.toLowerCase().includes(searchValue)
    );
  }, [filters.search, vehicles]);

  return { filteredVehicles, filters, setFilters };
};
