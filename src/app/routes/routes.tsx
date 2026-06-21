import type { RouteObject } from 'react-router';
import { HomePage } from '../../pages/HomePage';
import { VehiclePage } from '../../pages/VehiclePage';
import { PATHS } from './routes.constants';

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
