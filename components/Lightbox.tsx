import { useState } from 'react';

import { Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Photo } from '@/gql/graphql';

type LightboxType = Pick<Photo, 'webmedia'>;

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Lightbox = ({ webmedia }: LightboxType) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [isShowSwiper, setIsShowSwiper] = useState(false);

  if (!webmedia) return <></>;

  const { media } = webmedia;

  return (
    <div className="lightbox">
      <ul className="lightbox-list">
        {media.map((item, id) => {
          return (
            <li key={id} className="lightbox-item">
              <div
                onClick={() => {
                  setCurrentId(Number(id));
                  setIsShowSwiper(true);
                }}
                className="lightbox-content"
                style={{ backgroundImage: `url(${item.url})` }}
              ></div>
            </li>
          );
        })}
      </ul>

      {isShowSwiper && (
        <div className="lightbox-fullscreen">
          <div
            className="lightbox-overlay"
            onClick={(e) => {
              e.stopPropagation();
              setIsShowSwiper(false);
            }}
          ></div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="lightbox-swiper"
            initialSlide={currentId}
          >
            {media.map((item, id) => {
              return (
                <SwiperSlide key={id} className="lightbox-swiperItem">
                  <div
                    className="lightbox-swiperBackground"
                    style={{ backgroundImage: `url(${item.url})` }}
                  ></div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
