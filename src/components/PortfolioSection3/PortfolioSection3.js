import React from 'react';
import SectionTitle from '../SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { websiteImages } from "../../constants/images";

const Portfolios = [
  {
    Pimg: websiteImages.gallery1,
  },
  {
    Pimg: websiteImages.gallery2,
  },
  {
    Pimg: websiteImages.gallery3,
  },
  {
    Pimg: websiteImages.gallery4,
  },
];

const PortfolioSection3 = (props) => {
  var settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="wpo-portfolio-section-s2 section-padding"
      id="gallery"
      style={{ paddingTop: '0' }}
    >
      <div className="container-fluid">
        <SectionTitle MainTitle={'Sweet Moments'} />
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                <Slider {...settings}>
                  {Portfolios.map((portfolio, pitem) => (
                    <div className="grid" key={pitem}>
                      <div className="img-holder">
                        <img src={portfolio.Pimg} alt="img1" loading="lazy" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection3;
