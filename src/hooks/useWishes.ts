import { useContext } from 'react';
import { WishesContext } from '../context/WishContext';

export const useWishes = () => {
  const context = useContext(WishesContext);
  if (!context) {
    throw new Error('useWishes must be used within a WishesProvider');
  }
  return context;
};
