import clsx from 'clsx';
import cl from './Button.module.scss';
import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

export const Button: FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...props }) => {
  return (
    <button className={clsx([cl.button, className])} {...props}>
      {children}
    </button>
  );
};
