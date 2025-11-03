import { createContext } from 'react';
import type { Wish } from '../types/Wish';

export type ModalType =
  | { type: 'edit'; payload: Wish }
  | { type: 'add' }
  | { type: 'none' }
  | { type: 'confirm'; payload: Wish };

export type ModalContextType = {
  modal: ModalType;
  openAddModal: () => void;
  openEditModal: (wish: Wish) => void;
  openConfirmModal: (wish: Wish) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);
