import { Slideshow } from '@/gql/graphql';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

type HeroBannerType = Pick<Slideshow, 'fotoSlideshow'>;

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
