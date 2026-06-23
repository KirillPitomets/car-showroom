import cl from './PriceDoubleRangeSlider.module.scss';
import { type ChangeEvent, type FC } from 'react';
import { DoubleRangeSlider } from '../DoubleRangeSlider/doubleRangeSlider';

interface Props {
  minRange: number;
  maxRange: number;
  minValue: number;
  maxValue: number;
  handleMinPrice: (min: number) => void;
  handleMaxPrice: (max: number) => void;
}

export const PriceDoubleRangeSlider: FC<Props> = ({
  minRange,
  maxRange,
  minValue,
  maxValue,
  handleMaxPrice,
  handleMinPrice,
}) => {
  const onChangeMinVal = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    handleMinPrice(value);
  };

  const onChangeMaxVal = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > maxRange + 1) return;
    const value = Math.max(Number(e.target.value), minValue + 1);
    handleMaxPrice(value);
  };

  return (
    <div>
      <div className={cl.value}>
        <label className={cl.value__field}>
          <span className={cl.value__label}>Min</span>
          <div className={cl.value__input}>
            <span className={cl.value__currency}>$</span>
            <input
              type="number"
              value={minValue}
              min={minRange}
              max={maxValue - 1}
              onChange={onChangeMinVal}
              className={cl.value__control}
            />
          </div>
        </label>

        <span className={cl.value__divider}>—</span>

        <label className={cl.value__field}>
          <span className={cl.value__label}>Max</span>
          <div className={cl.value__input}>
            <span className={cl.value__currency}>$</span>
            <input
              type="number"
              value={maxValue}
              min={minValue + 1}
              max={maxRange}
              onChange={onChangeMaxVal}
              className={cl.value__control}
            />
          </div>
        </label>
      </div>

      <DoubleRangeSlider
        min={minRange}
        max={maxRange}
        maxVal={maxValue}
        minVal={minValue}
        onChangeMinValue={handleMinPrice}
        onChangeMaxValue={handleMaxPrice}
      />
    </div>
  );
};
