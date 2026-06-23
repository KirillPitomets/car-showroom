import clsx from 'clsx';
import cl from './TagsList.module.scss';
import type { FC } from 'react';

interface Props {
  tags: string[];
  className?: string;
  onClick?: (tag: string) => void;
  isActive?: boolean | ((tag: string) => boolean);
  isInteractive?: boolean;
}

export const TagsList: FC<Props> = ({
  tags,
  isActive,
  isInteractive,
  className,
  onClick,
}) => {
  return (
    <ul className={cl.tags}>
      {tags.map((tag) => (
        <li
          key={tag}
          onClick={() => onClick?.(tag)}
          className={clsx([
            cl.tags__tag,
            isInteractive && cl.tags__tag_interactive,
            {
              [cl.tags__tag_active]:
                typeof isActive === 'function' ? isActive(tag) : isActive,
            },
            className,
          ])}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
