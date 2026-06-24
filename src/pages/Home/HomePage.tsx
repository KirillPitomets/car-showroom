import { useGetVehicles } from '../../api/vehicles/query/useGetVehicles';
import { useVehicleFilters } from '../../hooks/useVehicleFilters';
import cl from './HomePage.module.scss';
import { VehicleList } from '../../components/VehicleList/VehicleList';
import { Sidebar } from '../../components/Sidebar/Sidebar';
export const HomePage = () => {
  const { data: vehicleRes, isLoading, isError, refetch } = useGetVehicles();

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
        isLoading={isLoading}
      />

      <VehicleList
        vehicles={filteredVehicles}
        isLoading={isLoading}
        isError={isError}
        onRetry={refetch}
      />
    </div>
  );
};
