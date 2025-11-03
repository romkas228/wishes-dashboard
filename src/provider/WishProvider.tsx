import { useMemo, type ReactNode } from 'react';
import { WishesContext } from '../context/WishContext';
import { useApi } from '../hooks/useApi';
import type { Wish } from '../types/Wish';
import { useFilters } from '../hooks/useFilters';

export const WishesProvider = ({ children }: { children: ReactNode }) => {
  const { data, refresh, patch, post, loading, error, del } =
    useApi<Wish[]>('wishes');
  const { sortBy, price, date } = useFilters();

  const sortedWishes = useMemo(() => {
    if (!data) return [];

    const copy = [...data];
    if (sortBy === 'price') {
      return copy.sort((a, b) =>
        price === 'high' ? b.price - a.price : a.price - b.price,
      );
    }

    if (sortBy === 'date') {
      return copy.sort((a, b) =>
        date === 'newest' ?
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    return copy;
  }, [data, sortBy, price, date]);

  const addWish = async (wish: Omit<Wish, 'id' | 'createdAt'>) => {
    await post(
      'wishes',
      { ...wish, createdAt: new Date().toISOString() },
      'Wish Added',
    );
    await refresh();
  };

  const deleteWish = async (id: string) => {
    await del(`wishes/${id}`, 'Wish deleted');
    await refresh();
  };

  const updateWish = async (id: string, updates: Partial<Wish>) => {
    const { imageUrl, description, price, title } = updates;
    await patch(
      `wishes/${id}`,
      { imageUrl, description, price, title },
      'Wish Updated',
    );
    await refresh();
  };

  return (
    <WishesContext.Provider
      value={{
        wishes: sortedWishes,
        loading,
        error,
        addWish,
        deleteWish,
        updateWish,
      }}
    >
      {children}
    </WishesContext.Provider>
  );
};
