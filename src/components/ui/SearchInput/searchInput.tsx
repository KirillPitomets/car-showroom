import { SearchIcon } from 'lucide-react';
import cl from './searchInput.module.scss';

import type { FC } from 'react';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: FC<Props> = ({ onChange, value }) => {
  return (
    <div className={cl.wrapper} role="search">
      <label htmlFor="vehicle-search" className={cl.visuallyHidden}>
        Пошук автомобіля
      </label>
      <SearchIcon className={cl.icon} />
      <input
        id="vehicle-search"
        type="search"
        className={cl.input}
        placeholder="Пошук за назвою..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={100}
      />
    </div>
  );
};
