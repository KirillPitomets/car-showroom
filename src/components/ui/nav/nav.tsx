import clsx from 'clsx';
import { navLinks } from './nav.data';
import cl from './nav.module.scss';
import { NavLink } from 'react-router';

export const Nav = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl['nav-list']}>
        {navLinks.map((link, indx) => (
          <li
            key={`${link.label}_${indx}`}
            className={clsx([cl.link, 'hover-underline'])}
          >
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
