import { useMemo, useState } from 'react';
import type { Vehicle } from '../api/vehicles/type/vehicle.type';

export type Filters = {
  search: string;
  brands: string[];
  minRating: number;
  minPrice: number;
  maxPrice: number;
};

const initialFilters: Filters = {
  search: '',
  brands: [],
  minRating: 0,
  minPrice: 0,
  maxPrice: 0,
};

export const useVehicleFilters = (vehicles: Vehicle[] = []) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const priceRange = useMemo(() => {
    if (!vehicles.length) return { min: 0, max: 100_000 };
    const prices = vehicles.map((vehicle) => vehicle.price);

    return {
      min: 0,
      max: Math.ceil(Math.max(...prices)),
    };
  }, [vehicles]);

  const brands = useMemo(() => {
    if (!vehicles.length) return [];

    const mappedBrands = vehicles.map((vehicle) => vehicle.brand);

    return mappedBrands.filter(
      (brand, indx) => mappedBrands.indexOf(brand) === indx
    );
  }, [vehicles]);

  const filteredVehicles = useMemo(() => {
    const searchValue = filters.search.toLowerCase();

    return vehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.title.toLowerCase().includes(searchValue) ||
        vehicle.brand.toLowerCase().includes(searchValue) ||
        vehicle.tags.find((tag) => tag.toLowerCase().includes(searchValue));

      const matchesBrand =
        !filters.brands.length || filters.brands.includes(vehicle.brand);

      const matchesRating = vehicle.rating >= filters.minRating;

      const matchesPrice =
        (filters.minPrice === 0 || vehicle.price >= filters.minPrice) &&
        (filters.maxPrice === 0 || vehicle.price <= filters.maxPrice);

      return matchesBrand && matchesPrice && matchesRating && matchesSearch;
    });
  }, [filters, vehicles]);

  const handleSearch = (search: string) =>
    setFilters((prev) => ({ ...prev, search }));

  const handleMinPrice = (minPrice: number) =>
    setFilters((prev) => ({ ...prev, minPrice }));

  const handleMaxPrice = (maxPrice: number) =>
    setFilters((prev) => ({ ...prev, maxPrice }));

  const handleRating = (minRating: number) =>
    setFilters((prev) => ({ ...prev, minRating }));

  const handleBrand = (brand: string) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter((el) => el !== brand)
        : [...prev.brands, brand],
    }));
  };

  const resetFilters = () => setFilters(initialFilters);

  return {
    filteredVehicles,
    filters,
    priceRange,
    brands,
    handleMaxPrice,
    handleMinPrice,
    handleSearch,
    handleBrand,
    handleRating,
    resetFilters,
  };
};
