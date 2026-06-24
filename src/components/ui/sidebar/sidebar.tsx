import cl from './sidebar.module.scss';
import { SearchInput } from '../SearchInput/searchInput';
import { type Filters } from '../../../hooks/useVehicleFilters';
import { useEffect, useState, type FC } from 'react';
import { Separate } from '../Separate/separate';
import { TagsList } from '../TagsList/TagsList';
import { PriceDoubleRangeSlider } from '../PriceDoubleRangeSlider/PriceDoubleRangeSlider';
import { StarRatingInput } from '../../StarRatingInput/StarRatingInput';
import { SidebarSkeleton } from './Skeleton';
import { Button } from '../Button/Button';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';
import clsx from 'clsx';
import { useScrollLock } from '../../../hooks/useScrollLock';

interface Props {
  filters: Filters;
  priceRange: { min: number; max: number };
  handleMinPrice: (min: number) => void;
  handleMaxPrice: (max: number) => void;
  handleSearch: (value: string) => void;
  handleBrand: (brands: string) => void;
  handleRating: (rating: number) => void;
  resetFilters: () => void;
  brands: string[];
  isLoading?: boolean;
}

export const Sidebar: FC<Props> = ({
  filters,
  priceRange,
  brands,
  handleSearch,
  handleBrand,
  handleMinPrice,
  handleMaxPrice,
  handleRating,
  resetFilters,
  isLoading,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useScrollLock(isOpen);

  if (isLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <>
      <HamburgerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={cl.hamburger}
      />
      <aside className={clsx([cl.sidebar, { [cl.sidebar_active]: isOpen }])}>
        <div className={cl.sidebar__wrapper}>
          <div className={cl.sidebar__flex}>
            <SearchInput value={filters.search} onChange={handleSearch} />
            <Button onClick={resetFilters}>RESET</Button>

            <PriceDoubleRangeSlider
              minRange={priceRange.min}
              maxRange={priceRange.max}
              minValue={filters.minPrice}
              maxValue={filters.maxPrice}
              handleMaxPrice={handleMaxPrice}
              handleMinPrice={handleMinPrice}
            />

            <Separate />

            <StarRatingInput
              minRating={filters.minRating}
              maxRating={5}
              handleRating={handleRating}
            />

            <Separate />

            <TagsList
              tags={brands}
              isInteractive
              onClick={(brand) => handleBrand(brand)}
              isActive={(brand) => filters.brands.includes(brand)}
            />
          </div>
        </div>
      </aside>
    </>
  );
};
