import cl from './Header.module.scss';
import { Logo } from '../../Logo/Logo';

export const Header = () => {
  return (
    <header className={cl.header}>
      <Logo />
    </header>
  );
};
