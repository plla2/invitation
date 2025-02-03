import React, { useEffect } from 'react';
import AOS from 'aos';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen relative text-white-100">
      <img
        className="absolute w-full"
        src="/images/landing-image2.jpg"
        alt="랜딩사진"
        decoding="async"
        fetchPriority="high"
      />
      <h1 className="text-4xl whitespace-normal w-full break-all absolute z-20 top-16 text-center">
        <p className="font-SometimesLight font-light">GILDONG & YURI</p>
      </h1>
    </div>
  );
};

export default Landing;
