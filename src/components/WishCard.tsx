import type { FC } from 'react';
import type { Wish } from '../types/Wish';
import { MdDeleteForever } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';
import { useModal } from '../hooks/useModal';
import { NavLink } from 'react-router';

interface Props {
  wish: Wish;
}

export const WishCard: FC<Props> = ({ wish }) => {
  const { openConfirmModal, openEditModal } = useModal();
  return (
    <article className="p-3 border rounded-3xl flex flex-col justify-between gap-2 h-full">
      <div className="flex flex-col grow gap-1">
        <img
          className="rounded-3xl mb-2 object-cover w-full aspect-square"
          src={wish.imageUrl}
          alt={wish.title}
        />
        <p className="font-bold text-lg cursor-default">{wish.title}</p>
        <p className="text-lg cursor-default line-clamp-3">
          {wish.description}
        </p>
        <p className="font-bold text-xl cursor-default mt-auto">{`${wish.price}$`}</p>
      </div>
      <div className="flex justify-between px-2 mt-auto">
        <button
          onClick={() => openConfirmModal(wish)}
          className="p-2 rounded-full transition hover:scale-105"
        >
          <MdDeleteForever className="text-red-600 size-10 hover:drop-shadow-[0_0_10px_#dc2626] transition" />
        </button>
        <button
          onClick={() => openEditModal(wish)}
          className="p-2 rounded-full transition hover:scale-105"
        >
          <FaPen className="text-green-500 size-8 hover:drop-shadow-[0_0_10px_#22c55e] transition" />
        </button>
        <NavLink
          to={`/wish/${wish.id}`}
          className="p-2 rounded-full transition hover:scale-105"
        >
          <CgDetailsMore className="text-blue-500 size-10 hover:drop-shadow-[0_0_10px_#3b82f6] transition" />
        </NavLink>
      </div>
    </article>
  );
};
