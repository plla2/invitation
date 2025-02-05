import { AppLayout } from '@/components/common/AppLayout';
import Header from '@/components/common/Header';
import Inviting from '@/components/features/Inviting/Inviting';
import Landing from '@/components/features/Landing';

const App = () => {
  return (
    <AppLayout>
      <Header />
      <Landing />
      <Inviting />
    </AppLayout>
  );
};

export default App;
