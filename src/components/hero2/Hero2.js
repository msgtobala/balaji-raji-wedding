import React from 'react';

import shape1 from '../../images/slider/shape.png';
import shape2 from '../../images/slider/shape2.png';
import * as constants from '../../constants/strings';
import { websiteImages as Images } from '../../constants/images';

const Hero2 = () => {
  return (
    <section className="static-hero-s2" id="home">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="wpo-static-hero-inner">
                  <div className="shape-1">
                    <img src={shape1} alt="shape1" loading="lazy" />
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
                  <div className="shape-2">
                    <img src={shape2} alt="shape2" loading="lazy" />
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
              src={Images.BalajiRaji}
              alt="our-hero"
              style={{ left: '18%', position: 'absolute' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
