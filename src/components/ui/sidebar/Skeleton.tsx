import clsx from 'clsx';
import cl from './sidebar.module.scss';
import { Separate } from '../Separate/separate';

export const SidebarSkeleton = () => {
  return (
    <aside className={cl.sidebar}>
      <div className={cl.skeleton} />
      <div className={cl.skeleton} />
      <div className={clsx([cl.skeleton, cl.skeleton_big])} />
      <Separate />
      <div className={clsx([cl.skeleton, cl.skeleton_med])} />
      <Separate />
      <div className={cl.skeleton} />
    </aside>
  );
};
