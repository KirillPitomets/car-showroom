import type { FC, PropsWithChildren } from 'react';
import cl from './layout.module.scss';
import { Header } from '../Header/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={cl.container}>
      <Header />
      {children}
    </div>
  );
};
