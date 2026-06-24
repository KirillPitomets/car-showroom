import clsx from 'clsx';
import cl from './HamburgerButton.module.scss';
import type { FC } from 'react';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export const HamburgerButton: FC<Props> = ({
  isOpen,
  setIsOpen,
  className,
}) => {
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      className={clsx([cl.hamburger, { [cl.open]: isOpen }, className])}
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <span className={cl.bar}></span>
      <span className={cl.bar}></span>
      <span className={cl.bar}></span>
    </button>
  );
};
