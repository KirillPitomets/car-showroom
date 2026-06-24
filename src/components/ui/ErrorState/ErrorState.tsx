import { Button } from '../Button/Button';
import cl from './ErrorState.module.scss';
import type { FC } from 'react';

interface Props {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorState: FC<Props> = ({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again later.',
  onRetry,
}) => {
  return (
    <div className={cl.block}>
      <h2 className={cl.title}>{title}</h2>
      <p className={cl.message}>{message}</p>
      {onRetry && <Button onClick={onRetry}>Try again</Button>}
    </div>
  );
};
