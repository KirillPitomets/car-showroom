import cl from './Logo.module.scss';
import { NavLink } from 'react-router';
import { PATHS } from '../../app/routes/routes.constants';

export const Logo = () => {
  return (
    <NavLink to={PATHS.HOME} className={cl.logo}>
      Car showroom
    </NavLink>
  );
};
