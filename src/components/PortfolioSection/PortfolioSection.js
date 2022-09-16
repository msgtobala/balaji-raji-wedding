import React from 'react';

import { Button } from '@material-ui/core';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';
import SectionTitle from '../SectionTitle';
import { galleryImage } from '../../constants/images';
import './styles.css';

const Portfolios = [
  {
    Pimg: galleryImage.OliKuchiIsHidingBehindTheYanaKutti,
  },
  {
    Pimg: galleryImage.OliKuchiIsHidingBehindTheYanaKutti,
  },
  {
    Pimg: galleryImage.OliKuchiIsHidingBehindTheYanaKutti,
  },
  {
    Pimg: galleryImage.OliKuchiIsHidingBehindTheYanaKutti,
  },
  {
    Pimg: galleryImage.OliKuchiIsHidingBehindTheYanaKutti,
  },
];

const PortfolioSection = (props) => {
  const { showBtn } = props;
  const redirectToAlbum = () => {
    window.open('/gallery');
  };

  return (
    <section
      style={{ paddingTop: '30px' }}
      className={`wpo-portfolio-section section-padding ${props.pSclass}`}
      id="gallery"
    >
      <div className="container">
        <SectionTitle MainTitle={'Sweet Moments'} />
        <div style={{ marginTop: '-60px' }}></div>
        {showBtn && (
          <div style={{ textAlign: 'right' }}>
            <Button className={`btn redirect-button`} onClick={redirectToAlbum}>
              View Album
            </Button>
          </div>
        )}
        {!showBtn && (
          <div style={{ marginBlock: '12px', visibility: 'hidden' }}>
            I Love you Rajiiiiiiiiiiiiiiiii
          </div>
        )}
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                {Portfolios.map((portfolio, pitem) => (
                  <div className="grid" key={pitem}>
                    <div className="img-holder">
                      <ReactFancyBox
                        thumbnail={portfolio.Pimg}
                        image={portfolio.Pimg}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
