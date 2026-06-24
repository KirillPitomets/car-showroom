import cl from './VehiclePage.module.scss';
import { useParams } from 'react-router';
import { useGetVehicleById } from '../../api/vehicles/query/useGetVehicleById';
import { RowTable } from '../../components/ui/RowTable/RowTable';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';
import { VehicleReviews } from '../../components/VehicleReviews/VehicleReviews';
import { getVehicleTables } from './vehicleTables.data';
import { useMargeVehicleReviews } from '../../hooks/useMargeVehicleReviews';
import { VehiclePageSkeleton } from './Skeleton';
import { NotFoundState } from '../../components/ui/NotFoundState/NotFoundState';
import { ErrorState } from '../../components/ui/ErrorState/ErrorState';

export const VehiclePage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();

  const {
    data: vehicle,
    isLoading,
    isError,
    refetch,
  } = useGetVehicleById(vehicleId!);

  const reviews = useMargeVehicleReviews(vehicleId, vehicle);

  if (isLoading) return <VehiclePageSkeleton />;
  if (isError) return <ErrorState onRetry={refetch} />;

  if (!vehicle || !vehicleId)
    return (
      <NotFoundState
        title="Vehicle not found"
        message="The vehicle you're looking for doesn't exist or has been removed."
      />
    );

  return (
    <div className={cl.container}>
      <div className={cl.gallery}>
        <ImageGallery images={vehicle.images} />
      </div>

      <div className={cl.tables}>
        {getVehicleTables(vehicle).map((table) => (
          <RowTable key={table.title} title={table.title} rows={table.rows} />
        ))}
      </div>

      <div className={cl.reviews}>
        <VehicleReviews vehicleId={vehicleId} reviews={reviews} />
      </div>
    </div>
  );
};
