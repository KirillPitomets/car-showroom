import cl from './Header.module.scss';
import { Logo } from '../../Logo/Logo';

export const Header = () => {
  return (
    <div className={cl.header}>
      <Logo />
    </div>
  );
};
