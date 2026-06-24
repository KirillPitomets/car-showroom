import cl from './Vehicle.module.scss';
import { type FC } from 'react';

interface Props {
  length: number;
}

export const VehicleListSkeleton: FC<Props> = ({ length }) => {
  return (
    <div className={cl.wrapper}>
      {Array.from({ length }).map((_) => (
        <div key={Date()} className={cl.skeleton}></div>
      ))}
    </div>
  );
};
