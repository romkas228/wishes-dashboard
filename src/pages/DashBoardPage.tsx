import { ActionBar } from '../components/ActionBar';
import { Container } from '../components/Container';
import { WishesGrid } from '../components/WishesGrid';
import { useWishes } from '../hooks/useWishes';

export const DashBoardPage = () => {
  const { wishes } = useWishes();
  return (
    <>
      <ActionBar />
      <Container>
        <WishesGrid wishes={wishes} />
      </Container>
    </>
  );
};
