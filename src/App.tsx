import { HashRouter } from 'react-router';
import { AppRouter } from './router/AppRouter';
import { WishesProvider } from './provider/WishProvider';
import { ModalProvider } from './provider/ModalProvider';
import { ModalRoot } from './components/ModalRoot';
import { FilterProvider } from './provider/FiltersProvider';
import { SnackBarProvider } from './provider/SnackBarProvider';

function App() {
  return (
    <SnackBarProvider>
      <ModalProvider>
        <FilterProvider>
          <WishesProvider>
            <HashRouter>
              <AppRouter />
              <ModalRoot />
            </HashRouter>
          </WishesProvider>
        </FilterProvider>
      </ModalProvider>
    </SnackBarProvider>
  );
}

export default App;
