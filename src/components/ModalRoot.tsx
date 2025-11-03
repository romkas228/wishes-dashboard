import { useModal } from '../hooks/useModal';
import { AddWishForm } from './AddWishForm';
import { DeleteModal } from './DeleteModal';
import { Modal } from './Modal';

export const ModalRoot = () => {
  const { modal, closeModal } = useModal();

  if (modal.type === 'none') return null;

  return (
    <Modal onClose={closeModal}>
      {modal.type === 'add' && <AddWishForm onCLose={closeModal} />}
      {modal.type === 'edit' && (
        <AddWishForm
          onCLose={closeModal}
          wishToEdit={modal.payload}
        />
      )}
      {modal.type === 'confirm' && (
        <DeleteModal
          wish={modal.payload}
          onCLose={closeModal}
        />
      )}
    </Modal>
  );
};
