import { useState } from "react";

import { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const DUMMY = [
  { url: "https://pulauaia1976.com/images/slide1.jpg", id: "1" },
  { url: "https://pulauaia1976.com/images/slide2.jpg", id: "2" },
  { url: "https://pulauaia1976.com/images/slide3.jpg", id: "3" },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Lightbox = () => {
  const [currentId, setCurrentId] = useState<number>(0);
  const [isShowSwiper, setIsShowSwiper] = useState(false);

  return (
    <div className="lightbox">
      <ul className="lightbox-list">
        {DUMMY.map((item) => {
          return (
            <li key={item.id} className="lightbox-item">
              <div
                onClick={() => {
                  setCurrentId(Number(item.id) - 1);
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
            {DUMMY.map((item) => {
              return (
                <SwiperSlide key={item.id} className="lightbox-swiperItem">
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
