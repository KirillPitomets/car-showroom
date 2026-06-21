import { useParams } from 'react-router';

export const VehiclePage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();

  return <h1>Vehicle: {vehicleId}</h1>;
};
