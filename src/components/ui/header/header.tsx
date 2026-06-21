import cl from './header.module.scss';
import { Nav } from '../nav';

export const Header = () => {
  return (
    <div className={cl.header}>
      <Nav />
    </div>
  );
};
