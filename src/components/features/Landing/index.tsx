import ParticlesContainer from '@/components/common/ParticlesContainer/ParticlesContainer';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { ReactTyped } from 'react-typed';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30, transition: { duration: 1, ease: 'easeIn', delay: 1 } },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' } },
};

const fadeDownVariant = {
  hidden: { opacity: 0, y: -30, transition: { duration: 1, ease: 'easeIn', delay: 1 } },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeIn' } },
};

const Landing = () => {
  const MemoizedParticles = useMemo(() => <ParticlesContainer />, []);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsVisible(false);
    }, 9000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setShowOverlay(false);
    }, 5500);

    return () => clearTimeout(timer2);
  }, []);

  return (
    <div className="min-h-[750px] w-full relative text-white-100">
      <img
        className="absolute w-full h-full object-cover"
        src="/images/landing-image2.jpg"
        alt="랜딩사진"
        decoding="async"
        fetchPriority="high"
      />

      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5.5, ease: 'easeIn' }}
            className="fixed top-4 left-1/2 w-full -translate-x-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
              className="font-Pretendard flex justify-center text-center text-sm"
            >
              배경음악이 준비되어 있습니다.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
          <span className="text-3xl w-full break-all absolute z-20 top-[70px] text-center font-SometimesLight font-light">
            GUNWOO & HYUNHEE
          </span>
          <div className="flex gap-[120px] justify-center text-sm w-full break-all absolute z-20 top-[110px] text-center font-Pretendard font-normal">
            <div className="flex gap-1">
              <span>신랑</span>
              <span>정건우</span>
            </div>
            <div className="flex gap-1">
              <span>신부</span>
              <span>박현희</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeDownVariant}
          className="flex flex-col gap-2 text-lg font-light absolute w-full break-all z-20 text-center items-center tracking-wide font-Pretendard bottom-12"
        >
          <div className="flex gap-2 items-center">
            <span>2025. 02. 04. Tue</span>
            <span>13:00</span>
          </div>
          <span>가나다라마바사아자차카타파하</span>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {showOverlay && (
          <motion.div
            className="absolute inset-0 min-h-dvh flex items-center justify-center bg-black-100 bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
          >
            <motion.h1
              className="text-white-100 text-4xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeIn' }}
            >
              <ReactTyped
                strings={['하고싶은말 정해지면 들어갈 곳']}
                typeSpeed={150}
                loop={false}
                style={{
                  color: '#FEFEFE',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  placeItems: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Pretendard',
                }}
              />
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      {MemoizedParticles}
    </div>
  );
};

export default Landing;
