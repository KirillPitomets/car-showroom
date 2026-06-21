import { useState } from 'react';

export const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue || '');

  const handleValue = (value: string) => {
    setValue(value);
  };

  return {
    value,
    handleValue,
  };
};
