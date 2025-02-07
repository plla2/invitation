import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ChevronPrev from '@/components/common/Icon/ChevronPrev';
import ChevronNext from '@/components/common/Icon/ChevronNext';

const images = [
  '/images/landing-image2.jpg',
  '/gallery/image2.jpg',
  '/gallery/image9.jpg',
  '/gallery/image3.jpg',
  '/gallery/image5.jpg',
  '/images/landing-image3.jpg',
  '/gallery/image10.jpg',
  '/images/landing.jpg',
  '/images/landing2.jpg',
  '/gallery/image7.jpg',
  '/gallery/image11.jpg',
];

interface Props {
  currentImageIndex: number;
}

const SwiperContainer = ({ currentImageIndex }: Props) => {
  return (
    <section className="bg-black-200 bg-opacity-40 font-SometimesLight min-h-screen flex items-center justify-center h-full relative">
      <div className="mx-auto px-4 w-full">
        <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-3xl text-center text-white-100 mb:top-4 mb:text-xl">
          GALLERY
        </h1>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          slidesPerView={1}
          spaceBetween={40}
          speed={500}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          pagination={{ el: '.custom-pagination', type: 'fraction' }}
          initialSlide={currentImageIndex}
          className="mb:mt-7"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index}`}
                className="max-h-[600px] w-full object-cover object-center rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="custom-prev flex justify-center items-center">
            <ChevronPrev size={20} color="#FEFEFE" />
          </button>
          <div className="custom-pagination flex justify-center items-center" />
          <button className="custom-next flex justify-center items-center">
            <ChevronNext size={20} color="#FEFEFE" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SwiperContainer;
