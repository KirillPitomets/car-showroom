import type { FC } from 'react';
import { getInitials } from '../../utils/getInitials';
import cl from './CommentAuthor.module.scss';

interface Props {
  name: string;
  email: string;
}

export const CommentAuthor: FC<Props> = ({ name, email }) => {
  return (
    <div className={cl.author}>
      <div className={cl.author__avatar}>{getInitials(name, ' ')}</div>
      <div>
        <p className={cl.author__name}>{name}</p>
        <p className={cl.author__email}>{email}</p>
      </div>
    </div>
  );
};
