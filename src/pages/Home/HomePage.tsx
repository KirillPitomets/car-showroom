import { useGetVehicles } from '../../api/vehicles/query/useGetVehicles';
import { useVehicleFilters } from '../../hooks/useVehicleFilters';
import cl from './HomePage.module.scss';
import { VehicleList } from '../../components/VehicleList';
import { Sidebar } from '../../components/ui/sidebar/sidebar';

export const HomePage = () => {
  const { data: vehicleRes, isLoading } = useGetVehicles();

  const {
    filteredVehicles,
    filters,
    priceRange,
    brands,
    handleBrand,
    handleSearch,
    handleMaxPrice,
    handleMinPrice,
    handleRating,
    resetFilters,
  } = useVehicleFilters(vehicleRes?.products);

  return (
    <div className={cl.wrapper}>
      <Sidebar
        filters={filters}
        handleSearch={handleSearch}
        handleMaxPrice={handleMaxPrice}
        handleMinPrice={handleMinPrice}
        handleBrand={handleBrand}
        handleRating={handleRating}
        resetFilters={resetFilters}
        priceRange={priceRange}
        brands={brands}
      />

      <VehicleList vehicles={filteredVehicles} isLoading={isLoading} />
    </div>
  );
};
