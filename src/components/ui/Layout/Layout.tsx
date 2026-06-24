import type { FC, PropsWithChildren } from 'react';
import cl from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={cl.container}>
      <Header />
      {children}
    </main>
  );
};
