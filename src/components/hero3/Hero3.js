import React from 'react';

import TimeCountDown from '../countdown';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { websiteImages as Images } from '../../constants/images';
import * as constants from '../../constants/strings';

const Hero3 = () => {
  return (
    <section className="wpo-hero-slider wpo-hero-style-3" id="home">
      <div className="wedding-announcement">
        <div className="couple-text">
          <h2>
            {constants.groomShortName} &amp; {constants.brideShortName}
          </h2>
          <p>{constants.marriedOn}</p>
          <div className="wpo-wedding-date">
            <div className="clock-grids">
              <TimeCountDown date="01/26/2023" />
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        speed={1800}
        parallax={true}
        navigation
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${Images.gallery11})` }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${Images.gallery10})` }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${Images.gallery4})` }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${Images.gallery3})` }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${Images.gallery2})` }}
            ></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${Images.gallery4})` }}
            ></div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Hero3;
