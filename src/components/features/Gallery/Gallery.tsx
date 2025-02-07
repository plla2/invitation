import { Dispatch, SetStateAction, useState } from 'react';
import Masonry from 'react-masonry-css';
import { AnimatePresence, motion } from 'framer-motion';
import ChevronDown from '@/components/common/Icon/ChevronDown';
import SwiperContainer from '@/components/common/Swiper/Swiper';
import Xmark from '@/components/common/Icon/Xmark';

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

interface Props {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
const Gallery = ({ modalOpen, setModalOpen }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <motion.div
      className="pt-28 pb-20 flex flex-col items-center w-full relative bg-white-300"
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
                className="w-full mb-4 rounded-lg shadow-md cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index - 3) * 0.1, duration: 0.4 }}
                onClick={() => handleImageClick(index)}
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
          animate={{ opacity: 1 }}
        >
          <span>더보기</span>
          <ChevronDown size={16} color="#7ba2c7" />
        </motion.button>
      )}

      <AnimatePresence mode="wait">
        {modalOpen && currentImageIndex !== null && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black-100 bg-opacity-70 flex items-center justify-center z-50 h-screen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="relative rounded-lg w-full h-full">
              <motion.div
                className="absolute top-5 right-5 cursor-pointer z-50 mb:top-3 mb:right-3"
                onClick={handleCloseModal}
                whileTap={{ scale: 0.8 }}
              >
                <Xmark size={30} color="#EFEFEF" />
              </motion.div>
              <SwiperContainer currentImageIndex={currentImageIndex} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;
