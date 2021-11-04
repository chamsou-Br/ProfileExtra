// Import Swiper React comimport { Virtual } from 'swiper';
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export default function DemoCarousel ()  {
  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper className="w-72 h-72" modules={[Virtual]}    direction="horizontal" spaceBetween={50} slidesPerView={1} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <img src='/chamsou.jpg' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};