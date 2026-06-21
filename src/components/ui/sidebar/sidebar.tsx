import cl from './sidebar.module.scss';
import { SearchInput } from '../SearchInput/searchInput';
import { type Filters } from '../../../hooks/useVehicleFilters';
import { useState, type FC } from 'react';

interface Props {
  filters: Filters;
  handleFilters: (filters: Filters) => void;
}

export const Sidebar: FC<Props> = ({ filters, handleFilters }) => {
  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100_000);

  return (
    <aside className={cl.sidebar}>
      <SearchInput
        value={filters.search}
        handleValue={(value) => handleFilters({ ...filters, search: value })}
      />
      <label>
        <p>{value}</p>
        <input type="number" onChange={(e) => setMin(+e.target.value)} />
        <input type="number" onChange={(e) => setMax(+e.target.value)} />
        <input
          type="range"
          min={min}
          max={max}
          // step={5_000}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
      </label>
    </aside>
  );
};
