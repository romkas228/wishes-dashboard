import { useContext } from 'react';
import { SnackBarContext } from '../context/SnackBarContext';

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);

  if (!context) {
    throw new Error('useSnackBar must be used within a SnackBarProvider');
  }

  return context;
};
