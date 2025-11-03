import type { FC } from 'react';
import type { Wish } from '../types/Wish';
import { WishCard } from './WishCard';

interface Props {
  wishes: Wish[];
}

export const WishesGrid: FC<Props> = ({ wishes }) => {
  return (
    <div className="grid py-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
      {wishes.map((wish) => (
        <WishCard
          key={wish.id}
          wish={wish}
        />
      ))}
    </div>
  );
};
