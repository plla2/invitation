import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { OutSideLayout } from '@/components/common/OutSideLayout/index.tsx';

dayjs.locale('ko');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OutSideLayout>
      <App />
    </OutSideLayout>
  </StrictMode>,
);
