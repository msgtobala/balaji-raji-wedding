import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const partners = [
  {
    name: 'Gunachitra',
    role: 'Artistry',
  },
  {
    name: 'SJ Fashions',
    role: 'Blouse Design',
  },
  {
    name: '',
    role: 'Photography',
  },
  {
    name: 'Amutha Ganam',
    role: 'DJ',
  },
  {
    name: 'Priya',
    role: 'Decorations',
  },
  {
    name: '',
    role: 'Ketti Melam',
  },
  {
    name: '',
    role: 'Invitation Design',
  },
];

const PartnerSection = (props) => {
  var settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`wpo-partners-section ${props.pClass}`}>
      <div className="container">
        <h2>Special Mentions</h2>
        <br />
        <div className="row">
          <div className="col col-xs-12">
            <div className="partner-grids partners-slider owl-carousel">
              <Slider {...settings}>
                {partners.map((partner) => (
                  <div className="grid partner-container" key={partner.name}>
                    <h4>{partner.role}</h4>
                    <p>{partner.name}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
