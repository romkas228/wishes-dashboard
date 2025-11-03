import { useState, type ReactNode } from 'react';
import { ModalContext, type ModalType } from '../context/ModalContext';
import type { Wish } from '../types/Wish';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ModalType>({ type: 'none' });

  const openAddModal = () => {
    setModal({ type: 'add' });
  };
  const openEditModal = (wish: Wish) => {
    setModal({ type: 'edit', payload: wish });
  };
  const openConfirmModal = (wish: Wish) => {
    setModal({ type: 'confirm', payload: wish });
  };
  const closeModal = () => {
    setModal({ type: 'none' });
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        openAddModal,
        openConfirmModal,
        openEditModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
