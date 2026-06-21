import type { FC, PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router';
import { QueryProvider } from './QueryProvider';

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryProvider>
  );
};
