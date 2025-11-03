import { useState, type ReactNode } from 'react';
import { FiltersContext, type SortType } from '../context/FiltersContext';
import type { dateFilterOption } from '../types/dateFilterOption';
import type { priceFilterOption } from '../types/priceFilterOptions';

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [price, setPriceFilter] = useState<priceFilterOption>('low');
  const [date, setDateFilter] = useState<dateFilterOption>('newest');
  const [sortBy, setSortBy] = useState<SortType>('date');

  return (
    <FiltersContext.Provider
      value={{
        price,
        date,
        sortBy,
        setSortBy,
        setPriceFilter: (value) => {
          setPriceFilter(value);
          setSortBy('price');
        },
        setDateFilter: (value) => {
          setDateFilter(value);
          setSortBy('date');
        },
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
