import cl from './VehiclePage.module.scss';
import { useParams } from 'react-router';
import { useGetVehicleById } from '../../api/vehicles/query/useGetVehicleById';
import { RowTable } from '../../components/ui/RowTable/RowTable';
import { ImageGallery } from '../../components/ImageGallery/ImageGallery';
import { VehicleReviews } from '../../components/VehicleReviews/VehicleReviews';
import { getVehicleTables } from './vehicleTables.data';
import { useMargeVehicleReviews } from '../../hooks/useMargeVehicleReviews';
import { VehiclePageSkeleton } from './Skeleton';

export const VehiclePage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();

  const { data: vehicle, isLoading } = useGetVehicleById(vehicleId || '');

  const reviews = useMargeVehicleReviews(vehicleId, vehicle);

  if (isLoading || !vehicleId || !vehicle) return <VehiclePageSkeleton />;

  return (
    <div className={cl.container}>
      <div className={cl.block}>
        <ImageGallery images={vehicle.images} />
        <VehicleReviews vehicleId={vehicleId} reviews={reviews} />
      </div>

      <div className={cl.block}>
        {getVehicleTables(vehicle).map((table) => (
          <RowTable key={table.title} title={table.title} rows={table.rows} />
        ))}
      </div>
    </div>
  );
};
