import clsx from 'clsx';
import cl from './VehiclePage.module.scss';

export const VehiclePageSkeleton = () => {
  return (
    <div
      className={cl.container}
      style={{ position: 'absolute', width: '100%' }}
    >
      <div className={clsx(cl.block)}>
        <div className={clsx([cl.skeleton, cl.skeleton_big])}></div>
        <div className={clsx([cl.skeleton, cl.skeleton_small])}></div>
      </div>
      <div className={cl.block}>
        <div className={cl.skeleton}></div>
        <div className={cl.skeleton}></div>
        <div className={cl.skeleton}></div>
      </div>
    </div>
  );
};
