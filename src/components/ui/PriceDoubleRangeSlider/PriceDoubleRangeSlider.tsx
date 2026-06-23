import cl from './PriceDoubleRangeSlider.module.scss';
import { useState, type ChangeEvent, type FC } from 'react';
import { DoubleRangeSlider } from '../DoubleRangeSlider/doubleRangeSlider';

interface Props {
  min: number;
  max: number;
  handleMinPrice: (min: number) => void;
  handleMaxPrice: (max: number) => void;
}

export const PriceDoubleRangeSlider: FC<Props> = ({
  min,
  max,
  handleMaxPrice,
  handleMinPrice,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const handleMinVal = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
  };

  const handleMaxVal = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > max + 1) return;
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
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
              value={minVal}
              min={min}
              max={maxVal - 1}
              onChange={handleMinVal}
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
              value={maxVal}
              min={minVal + 1}
              max={max}
              onChange={handleMaxVal}
              className={cl.value__control}
            />
          </div>
        </label>
      </div>

      <DoubleRangeSlider
        min={min}
        max={max}
        maxVal={maxVal}
        minVal={minVal}
        setMaxVal={setMaxVal}
        setMinVal={setMinVal}
        onChangeMinValue={handleMinPrice}
        onChangeMaxValue={handleMaxPrice}
      />
    </div>
  );
};
