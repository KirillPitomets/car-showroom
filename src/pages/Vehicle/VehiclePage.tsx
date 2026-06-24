import cl from './VehiclePage.module.scss';
import { useParams } from 'react-router';
import { useGetVehicleById } from '../../api/vehicles/query/useGetVehicleById';
import { RowTable } from '../../components/ui/RowTable/RowTable';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';
import { VehicleReviews } from '../../components/VehicleReviews/VehicleReviews';
import { getVehicleTables } from './vehicleTables.data';

export const VehiclePage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const {
    data: vehicle,
    isLoading,
    error,
    isError,
  } = useGetVehicleById(vehicleId!);

  if (isLoading) return <div>Loading...</div>;

  if (!vehicle || isError)
    return (
      <div>
        <h1>Vehicle not found :(</h1>
        <p>{error?.message}</p>
      </div>
    );

  return (
    <div className={cl.container}>
      <div className={cl.block}>
        <ImageGallery images={vehicle.images} />
        <VehicleReviews reviews={vehicle.reviews} />
      </div>

      <div className={cl.block}>
        {getVehicleTables(vehicle).map((table) => (
          <RowTable key={table.title} title={table.title} rows={table.rows} />
        ))}
      </div>
    </div>
  );
};
