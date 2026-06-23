import clsx from 'clsx';
import cl from './ButtonBase.module.scss';
import type { FC, PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

export const ButtonBase: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={clsx([cl.button, className])}> {children} </div>;
};
