const VEHICLE_BASE = '/vehicles';
export const PATHS = {
  HOME: '/',
  VEHICLE: VEHICLE_BASE,
  VEHICLE_ID: `${VEHICLE_BASE}/:vehicleId`,
} as const;

export const buildVehiclePath = (vehicleId: string) =>
  `${VEHICLE_BASE}/${vehicleId}`;
