import { AppLayout } from '@/components/common/AppLayout';
import Header from '@/components/common/Header';
import Inviting from '@/components/features/Inviting/Inviting';
import Landing from '@/components/features/Landing';
import WeddingDay from '@/components/features/WeddingDay/WeddingDay';

const App = () => {
  return (
    <AppLayout>
      <Header />
      <Landing />
      <Inviting />
      <WeddingDay />
    </AppLayout>
  );
};

export default App;
