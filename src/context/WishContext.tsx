import { createContext } from 'react';
import type { Wish } from '../types/Wish';

type WishesContextType = {
  wishes: Wish[];
  loading: boolean;
  error: string | null;
  addWish: (wish: Omit<Wish, 'id' | 'createdAt'>) => Promise<void>;
  deleteWish: (id: string) => Promise<void>;
  updateWish: (id: string, updates: Partial<Wish>) => Promise<void>;
};

export const WishesContext = createContext<WishesContextType | undefined>(
  undefined,
);
