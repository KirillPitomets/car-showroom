import clsx from 'clsx';
import cl from './doubleRangeSlider.module.scss';
import { useEffect, useRef, type ChangeEvent, type FC } from 'react';

interface Props {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  onChangeMinValue: (min: number) => void;
  onChangeMaxValue: (max: number) => void;
}

export const DoubleRangeSlider: FC<Props> = ({
  min,
  max,
  minVal,
  maxVal,
  onChangeMaxValue,
  onChangeMinValue,
}) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  const rangeRef = useRef<HTMLDivElement>(null);

  // Convert values to percentages to style the track bar fill dynamically
  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100);

  const handleMinVal = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    onChangeMinValue(value);
    minValRef.current = value;
  };

  const handleMaxVal = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > max) return;
    const value = Math.max(Number(e.target.value), minVal + 1);
    onChangeMaxValue(value);
    maxValRef.current = value;
  };

  // Set width of the range track from the left side
  useEffect(() => {
    const minPersent = getPercent(minVal);
    const maxPersent = getPercent(maxValRef.current);

    if (rangeRef.current) {
      rangeRef.current.style.left = `${minPersent}%`;
      rangeRef.current.style.width = `${maxPersent - minPersent}%`;
    }
  }, [minVal, min, max]);

  // Set width of the range track from the right side
  useEffect(() => {
    const minPersent = getPercent(minValRef.current);
    const maxPersent = getPercent(maxVal);
    if (rangeRef.current) {
      rangeRef.current.style.width = `${maxPersent - minPersent}%`;
    }
  }, [maxVal, min, max]);

  useEffect(() => {
    onChangeMinValue?.(minVal);
  }, [minVal]);

  useEffect(() => {
    onChangeMaxValue?.(maxVal);
  }, [maxVal]);

  //  todo
  useEffect(() => {
    onChangeMinValue(min);
    onChangeMaxValue(max);

    minValRef.current = min;
    maxValRef.current = max;
  }, [min, max]);

  return (
    <div className={cl.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleMinVal}
        className={clsx([cl.thumb, cl['thumb--left']])}
        style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleMaxVal}
        className={clsx([cl.thumb, cl['thumb--right']])}
      />

      <div className={cl.slider}>
        <div className={cl.slider__track} />
        <div ref={rangeRef} className={cl.slider__range} />
        <div className={cl['slider__left-valu']} />
        <div className={cl['slider__right-valu']} />
      </div>
    </div>
  );
};
