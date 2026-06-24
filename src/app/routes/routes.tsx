import type { RouteObject } from 'react-router';
import { VehiclePage } from '../../pages/Vehicle/VehiclePage';
import { PATHS } from './routes.constants';
import { HomePage } from '../../pages/Home/HomePage';

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.VEHICLE_ID,
    element: <VehiclePage />,
  },
];
