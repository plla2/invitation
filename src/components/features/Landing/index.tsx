import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="min-h-[650px] relative text-white-100">
      <img
        className="absolute w-full h-full"
        src="/images/landing-image2.jpg"
        alt="랜딩사진"
        decoding="async"
        fetchPriority="high"
      />
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <h1 className="text-4xl w-full break-all absolute z-20 top-16 text-center font-SometimesLight font-light">
          GILDONG & YURI
        </h1>
      </div>
      <div className="flex flex-col gap-2 text-lg font-light absolute w-full break-all z-20 text-center items-center tracking-wide font-Pretendard bottom-12">
        <div className="flex gap-2 items-center">
          <span>2025. 02. 04. Tue</span>
          <span>13:00</span>
        </div>
        <span>가나다라마바사아자차카타파하</span>
      </div>
    </div>
  );
};

export default Landing;
