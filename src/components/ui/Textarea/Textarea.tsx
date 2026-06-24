import type { FC, TextareaHTMLAttributes } from 'react';
import cl from './Textarea.module.scss';
import clsx from 'clsx';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Textarea: FC<Props> = ({
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
        <textarea className={clsx([cl.textarea, className])} {...props} />
      </div>
      {error && <span className={cl.error}>{error}</span>}
    </label>
  );
};
