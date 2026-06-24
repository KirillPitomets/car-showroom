import cl from './sidebar.module.scss';
import { SearchInput } from '../SearchInput/searchInput';
import { type Filters } from '../../../hooks/useVehicleFilters';
import { type FC } from 'react';
import { RangeSlider } from '../RangeSlider/rangeSlide';
import { Separate } from '../Separate/separate';
import { TagsList } from '../TagsList/TagsList';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import { PriceDoubleRangeSlider } from '../PriceDoubleRangeSlider/PriceDoubleRangeSlider';
import { StarRating } from '../StarRating.module.scss/StarRating';
import { StarRatingInput } from '../../StarRatingInput/StarRatingInput';

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
  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <aside className={cl.sidebar}>
      <SearchInput value={filters.search} onChange={handleSearch} />
      <button onClick={resetFilters}>
        <ButtonBase>RESET</ButtonBase>
      </button>

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
    </aside>
  );
};
