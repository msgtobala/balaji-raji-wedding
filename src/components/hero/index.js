import React from 'react';

import TimeCountDown from '../countdown';
import shape1 from '../../images/slider/shape.svg';
import shape2 from '../../images/slider/flower1.png';
import shape3 from '../../images/slider/flower2.png';
import * as constants from '../../constants/strings';
import { galleryImage as Images } from '../../constants/images';
import './styles.css';

const Hero = () => {
  return (
    <section className="static-hero" id="home">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-6 col-12">
                <div className="wpo-static-hero-inner">
                  <div className="shape-1">
                    <img src={shape1} alt="heart-icon" />
                  </div>
                  <div data-swiper-parallax="300" className="slide-title">
                    <h2>
                      {constants.groomShortName} <span>&amp;</span>{' '}
                      {constants.brideShortName}
                    </h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>{constants.marriedOn}</p>
                  </div>
                  <div className="wpo-wedding-date">
                    <div className="clock-grids">
                      <TimeCountDown date="01/26/2023" />
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static-hero-right">
        <div className="static-hero-img">
          <div className="static-hero-img-inner shape-image">
            <img
              src={Images.OliKuchiIsHidingBehindTheYanaKutti}
              alt="hero-placeholder"
            />
          </div>
          <div className="static-hero-shape-1">
            <img src={shape2} alt="hero-flower1" />
          </div>
          <div className="static-hero-shape-2">
            <img src={shape3} alt="hero-flower2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
