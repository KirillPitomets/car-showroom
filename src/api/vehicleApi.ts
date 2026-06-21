import axios from 'axios';

export const vehicleApi = axios.create({
  baseURL: import.meta.env.VITE_VEHICLE_API_URL,
});
