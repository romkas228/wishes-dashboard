import type { FC } from 'react';
import type { Wish } from '../types/Wish';
import { useWishes } from '../hooks/useWishes';
import { useNavigate } from 'react-router';

type Props = {
  wish: Wish;
  onCLose: () => void;
};

export const DeleteModal: FC<Props> = ({ wish, onCLose }) => {
  const navigate = useNavigate();
  const { deleteWish } = useWishes();

  const handleConfirm = async () => {
    await deleteWish(wish.id);
    onCLose();
    navigate('/');
  };

  return (
    <div className="text-center flex flex-col gap-3">
      <h2>Delete wish {wish.title}?</h2>

      <div className="flex justify-center gap-3">
        <button
          onClick={handleConfirm}
          className="bg-red-600 hover:bg-red-800 transition text-white px-4 py-2 rounded"
        >
          Yes
        </button>
        <button
          onClick={onCLose}
          className="bg-gray-200 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
