import { AppLayout } from '@/components/common/AppLayout';
import Header from '@/components/common/Header';
import Gallery from '@/components/features/Gallery/Gallery';
import Inviting from '@/components/features/Inviting/Inviting';
import Landing from '@/components/features/Landing';
import Location from '@/components/features/Location/Location';
import WeddingDay from '@/components/features/WeddingDay/WeddingDay';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (modalOpen || showOverlay) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [modalOpen, showOverlay]);

  return (
    <AppLayout>
      <Header />
      <Landing showOverlay={showOverlay} setShowOverlay={setShowOverlay} />
      <Inviting />
      <WeddingDay />
      <Gallery modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Location />
    </AppLayout>
  );
};

export default App;
