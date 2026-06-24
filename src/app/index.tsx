import { Layout } from '../components/ui/Layout/Layout';
import { Providers } from './providers';
import { MainRoutes } from './routes';

export const App = () => {
  return (
    <Providers>
      <Layout>
        <MainRoutes />
      </Layout>
    </Providers>
  );
};
