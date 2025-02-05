import ParticlesContainer from '@/components/common/ParticlesContainer/ParticlesContainer';
import Snowflakes from '@/components/common/SnowFlakes/SnowFlakes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';

const Landing = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="min-h-[650px] w-full relative text-white-100">
      {/* <Snowflakes count={18} /> */}
      <ParticlesContainer />
      <img
        className="absolute w-full h-full"
        src="/images/landing-image2.jpg"
        alt="랜딩사진"
        decoding="async"
        fetchPriority="high"
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 5, ease: 'easeIn' }}
            className="fixed top-7 left-1/2 w-full -translate-x-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
              className="font-Pretendard flex justify-center text-center"
            >
              배경음악이 준비되어 있습니다.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
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
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="flex flex-col gap-2 text-lg font-light absolute w-full break-all z-20 text-center items-center tracking-wide font-Pretendard bottom-12"
      >
        <div className="flex gap-2 items-center">
          <span>2025. 02. 04. Tue</span>
          <span>13:00</span>
        </div>
        <span>가나다라마바사아자차카타파하</span>
      </div>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 min-h-dvh flex items-center justify-center bg-black-100 bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-white-100 text-4xl font-bold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
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
    </div>
  );
};

export default Landing;
