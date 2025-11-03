import { useState, type FC } from 'react';
import type { Wish } from '../types/Wish';
import { useWishes } from '../hooks/useWishes';

type Props = {
  wishToEdit?: Wish;
  onCLose: () => void;
};

export const AddWishForm: FC<Props> = ({ wishToEdit, onCLose }) => {
  const isEdit = !!wishToEdit;
  const { addWish, updateWish } = useWishes();
  const [title, setTitle] = useState<string>(wishToEdit?.title || '');
  const [description, setDescription] = useState<string>(
    wishToEdit?.description || '',
  );
  const [price, setPrice] = useState<number>(wishToEdit?.price || 0);
  const [imageUrl, setImageUrl] = useState<string>(wishToEdit?.imageUrl || '');
  const [isValidated, setIsValidated] = useState(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsValidated(true);
    if (!description || !title || !imageUrl) {
      setIsValidated(false);
      return;
    }

    if (isEdit) {
      await updateWish(wishToEdit.id, { title, description, price, imageUrl });
    } else {
      await addWish({ title, description, price, imageUrl });
    }

    onCLose();
  };

  return (
    <div className="w-full md:w-2xl">
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <h2 className="self-center font-medium text-xl">
          {isEdit ? 'Edit wish' : 'Add wish'}
        </h2>
        <label className="flex flex-col gap-2">
          Name
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-xl p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-xl p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Price
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="border rounded-xl p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          Image
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border rounded-xl p-2"
          />
        </label>
        {!isValidated && (
          <p className="text-red-500">All fields must be full</p>
        )}
        <button
          type="submit"
          className="btn-primary mt-2 transition"
        >
          {isEdit ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};
