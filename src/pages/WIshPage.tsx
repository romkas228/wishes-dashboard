import { useNavigate, useParams } from 'react-router';
import { Container } from '../components/Container';
import { useWishes } from '../hooks/useWishes';
import { useModal } from '../hooks/useModal';

export const WishPage = () => {
  const { wishId } = useParams();
  const navigate = useNavigate();
  const { openConfirmModal, openEditModal } = useModal();
  const { wishes } = useWishes();

  const wish = wishes.find((wish) => wish.id === wishId);

  if (!wish) {
    return <p className="text-center mt-8">Wish not found 😔</p>;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-col gap-6">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:underline self-start"
        >
          Back to Dashboard
        </button>
        <div className="flex flex-col md:flex-row gap-6 bg-gray-100 p-4 rounded-2xl shadow-md">
          <img
            src={wish.imageUrl}
            alt={wish.title}
            className=" h-82 object-contain rounded-xl"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">{wish.title}</h2>
              <p className="text-gray-700 mb-4">{wish.description}</p>
              <p className="text-xl font-semibold text-green-600">
                ${wish.price}
              </p>
            </div>

            <p className="font-medium text-xl text-gray-500">
              Added: {new Date(wish.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="py-2 px-4 bg-gray-400 hover:bg-gray-600 transition rounded-xl text-white"
            type="button"
            onClick={() => openEditModal(wish)}
          >
            Edit
          </button>
          <button
            className="py-2 px-4 bg-red-600 hover:bg-red-400 transition rounded-xl text-white"
            type="button"
            onClick={() => openConfirmModal(wish)}
          >
            Delete
          </button>
        </div>
      </div>
    </Container>
  );
};
