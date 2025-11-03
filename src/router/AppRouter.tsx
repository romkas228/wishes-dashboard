import { Navigate, Route, Routes } from 'react-router';
import { DashBoardPage } from '../pages/DashBoardPage';
import { WishPage } from '../pages/WIshPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<DashBoardPage />}
      />
      <Route
        path="/wish/:wishId"
        element={<WishPage />}
      />
      <Route
        path="*"
        element={<Navigate to={'/'} />}
      />
    </Routes>
  );
};
