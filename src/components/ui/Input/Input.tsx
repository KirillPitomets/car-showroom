import type { FC, InputHTMLAttributes } from 'react';
import cl from './Input.module.scss';
import clsx from 'clsx';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input: FC<Props> = ({
  className,
  icon,
  label,
  error,
  ...props
}) => {
  return (
    <label className={clsx([cl.root, { [cl.root_error]: !!error }])}>
      {label && <span className={cl.label}>{label}</span>}
      <div className={cl.wrapper}>
        {icon && <span>{icon}</span>}
        <input className={clsx([cl.input, className])} {...props} />
      </div>
      {error && <span className={cl.error}>{error}</span>}
    </label>
  );
};
