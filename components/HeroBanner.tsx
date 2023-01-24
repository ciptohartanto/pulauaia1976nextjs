import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Slideshow } from '@/gql/graphql';

type HeroBannerType = Pick<Slideshow, 'fotoSlideshow'>;

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroBanner = ({ fotoSlideshow }: HeroBannerType) => {
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
      {fotoSlideshow.map((item) => {
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

export default HeroBanner;
