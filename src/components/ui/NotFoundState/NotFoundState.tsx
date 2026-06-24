import cl from './NotFoundState.module.scss';
import { useNavigate } from 'react-router';
import { Button } from '../Button/Button';
import { PATHS } from '../../../app/routes/routes.constants';
import type { FC } from 'react';

interface Props {
  title: string;
  message?: string;
  noButton?: boolean;
  to?: string;
  buttonLabel?: string;
}

export const NotFoundState: FC<Props> = ({
  title,
  message,
  buttonLabel = 'Go to home',
  noButton,
  to = PATHS.HOME,
}) => {
  const navigate = useNavigate();

  return (
    <div className={cl.block}>
      <div>
        <h1 className={cl.title}>{title}</h1>
        {message && <p className={cl.message}>{message}</p>}
      </div>
      {!noButton && <Button onClick={() => navigate(to)}>{buttonLabel}</Button>}
    </div>
  );
};
