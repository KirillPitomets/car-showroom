import cl from './RangeSlider.module.scss';

import { type FC, type ChangeEvent, useEffect, useRef, useState } from 'react';

interface Props {
  min: number;
  max: number;
  value?: number;
  onChange?: (value: number) => void;
}

export const RangeSlider: FC<Props> = ({ min, max, value = min, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);

  const rangeRef = useRef<HTMLDivElement>(null);

  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(e.target.value));
  };

  useEffect(() => {
    const percent = getPercent(currentValue);

    if (rangeRef.current) {
      rangeRef.current.style.width = `${percent}%`;
    }
  }, [currentValue, min, max]);

  useEffect(() => {
    onChange?.(currentValue);
  }, [currentValue]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <div className={cl.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={currentValue}
        onChange={handleChange}
        className={cl.thumb}
      />

      <div className={cl.slider}>
        <div className={cl.slider__track} />
        <div ref={rangeRef} className={cl.slider__range} />
      </div>
    </div>
  );
};
