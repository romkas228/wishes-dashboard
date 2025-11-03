import { createContext } from 'react';
import type { dateFilterOption } from '../types/dateFilterOption';
import type { priceFilterOption } from '../types/priceFilterOptions';

export type SortType = 'price' | 'date';

export type FiltersContextType = {
  sortBy: SortType;
  price: priceFilterOption;
  date: dateFilterOption;
  setSortBy: (value: SortType) => void;
  setPriceFilter: (value: priceFilterOption) => void;
  setDateFilter: (value: dateFilterOption) => void;
};

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined,
);
