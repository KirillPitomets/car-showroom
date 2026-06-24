import { SearchIcon } from 'lucide-react';
import cl from './SearchInput.module.scss';

import type { FC } from 'react';
import { Input } from '../Input/Input';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: FC<Props> = ({ onChange, value }) => {
  return (
    <div className={cl.wrapper} role="search">
      <Input
        icon={<SearchIcon size={17} />}
        id="vehicle-search"
        type="search"
        placeholder="Пошук за назвою..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={100}
      />
    </div>
  );
};
