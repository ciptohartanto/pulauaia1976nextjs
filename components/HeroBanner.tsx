import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const DUMMY = [
  { url: 'https://pulauaia1976.com/images/slide1.jpg', id: '1' },
  { url: 'https://pulauaia1976.com/images/slide2.jpg', id: '2' },
  { url: 'https://pulauaia1976.com/images/slide3.jpg', id: '3' },
];

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="heroBanner-swiper"
      autoplay={{ delay: 10000 }}
    >
      {DUMMY.map((item) => {
        return (
          <SwiperSlide key={item.id} className="heroBanner-item">
            <div
              className="heroBanner-background"
              style={{ backgroundImage: `url(${item.url})` }}
            ></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
