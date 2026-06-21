import cl from './searchInput.module.scss';

import type { FC } from 'react';

interface Props {
  value: string;
  handleValue: (value: string) => void;
}

export const SearchInput: FC<Props> = ({ handleValue, value }) => {
  return (
    <div className={cl.wrapper} role="search">
      <label htmlFor="vehicle-search" className={cl.visuallyHidden}>
        Пошук автомобіля
      </label>
      <svg className={cl.icon} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        id="vehicle-search"
        type="search"
        className={cl.input}
        placeholder="Пошук за назвою..."
        value={value}
        onChange={(e) => handleValue(e.target.value)}
        maxLength={100}
      />
    </div>
  );
};
