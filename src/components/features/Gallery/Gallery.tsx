'use client';

import { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import ChevronDown from '@/components/common/Icon/ChevronDown';

const breakpointColumnsObj = {
  default: 2,
};

const images = [
  '/gallery/image1.jpg',
  '/gallery/image2.jpg',
  '/gallery/image9.jpg',
  '/gallery/image3.jpg',
  '/gallery/image5.jpg',
  '/gallery/image6.jpg',
  '/gallery/image10.jpg',
  '/gallery/image8.jpg',
  '/gallery/image4.jpg',
  '/gallery/image7.jpg',
  '/gallery/image11.jpg',
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <motion.div
      className="py-28 flex flex-col items-center w-full relative bg-white-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.8, ease: 'easeIn' } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeIn' } }}
        viewport={{ once: true }}
        className="flex flex-col gap-2 justify-center items-center text-blue-500 mb-10"
      >
        <span className="font-SometimesBold font-semibold tracking-wider text-test-100">GALLERY</span>
        <span className="font-GowunDodum font-semibold text-lg">우리의 스냅샷</span>
      </motion.div>

      <div className="relative w-full max-w-4xl p-4">
        <motion.div
          className={`relative overflow-hidden ${showAll ? 'h-auto' : 'h-[360px]'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.8, ease: 'easeIn' } }}
          viewport={{ once: true }}
        >
          <Masonry breakpointCols={breakpointColumnsObj} className="flex gap-2" columnClassName="masonry-column">
            {(showAll ? images : images.slice(0, 4)).map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`image-${index}`}
                className="w-full mb-4 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index - 3) * 0.1, duration: 0.4 }}
              />
            ))}
          </Masonry>
        </motion.div>

        {!showAll && <div className="absolute bottom-0 left-0 right-0 h-32 bg-custom-fade pointer-events-none mx-2" />}
      </div>

      {!showAll && (
        <motion.button
          onClick={handleShowAll}
          className="font-GowunDodum px-4 py-2 text-blue-500 flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            // y: [0, -4, 0],
          }}
          // transition={{
          //   duration: 1,
          //   repeat: Infinity,
          //   repeatType: 'reverse',
          // }}
        >
          <span>더보기</span>
          <ChevronDown size={16} color="#7ba2c7" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Gallery;
