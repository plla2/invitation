import { AppLayout } from '@/components/common/AppLayout';
import Header from '@/components/common/Header';
import Landing from '@/components/features/Landing';

const App = () => {
  return (
    <AppLayout>
      <Header />
      <Landing />
    </AppLayout>
  );
};

export default App;
