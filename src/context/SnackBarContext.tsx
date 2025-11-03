import { createContext } from 'react';

export type SnackBarKind = 'success' | 'error' | 'info';

export type SnackBarMessage = {
  id: string;
  text: string;
  kind: SnackBarKind;
};

export type SnackBarContextType = {
  showError: (text: string) => void;
  showSuccess: (text: string) => void;
  showInfo: (text: string) => void;
};

export const SnackBarContext = createContext<SnackBarContextType | undefined>(
  undefined,
);
