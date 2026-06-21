import { useRoutes } from 'react-router';
import { routes } from './routes';

export const MainRoutes = () => {
  const element = useRoutes(routes);

  return element;
};
